import MagisterPerson from './MagisterPerson.js';

import axios from 'axios';

export default class MagisterProfile {
  private _token: string | undefined = undefined;
  private _id: number = 0;
  private _school: string | undefined = undefined;
  private _person: MagisterPerson | undefined = undefined;

  private constructor() {}

  static create = async (school: string, token: string) => {
    const me = new MagisterProfile();
    me._school = school;
    me._token = token;
    await me.Verify();
    return me;
  };

  private async Verify(): Promise<void> {
    if (!this._school || !this._token) {
      console.log('Either school or token was not defined!');
      return;
    }
    console.log(`Authenticating to ${this._school}...`);
    const uri = `https://${this._school}.magister.net/api/account`;

    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      });

      if (response.status === 200) {
        const res = response.data;
        this._person = new MagisterPerson(res['Persoon']);
        this._id = this._person.id;
        console.log(
          `Successfully authenticated as ${this._person.firstName} with id ${this._person.id}`
        );
      } else {
        console.log(
          `Failed to authenticate, HTTP code ${response.status}: ${response.statusText}`
        );
      }
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    }
  }

  AuthenticatedRequest(endpoint: string): Promise<any | null> {
    if (this._id === 0) {
      console.warn('Not yet authenticated!');
      return new Promise<null>((resolve) => {
        resolve(null);
      });
    }

    let uri = `https://${this._school}.magister.net/api${endpoint}`;
    uri = uri.replace('{*id*}', this._id.toString());

    return new Promise<any | null>((resolve) => {
      axios
        .get(uri, {
          headers: {
            Authorization: `Bearer ${this._token}`,
          },
        })
        .then((res) => {
          if (res.status !== 200) {
            console.warn(
              `Failed to get ${endpoint}, status code ${res.status}: ${res.statusText}`
            );
            return resolve(null);
          }

          resolve(res.data as any);
        })
        .catch((error) => {
          console.warn('An error occured making an authenticated request!');
          resolve(null);
        });
    });
  }

  public set token(v: string) {
    this._token = v;
  }

  public get id(): number {
    return this.id;
  }

  public get school(): string | undefined {
    return this._school;
  }

  public get person(): MagisterPerson | undefined {
    return this._person;
  }
}
