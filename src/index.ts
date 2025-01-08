import MagisterProfile from './MagisterProfile.js';

export class Magister {
  private _profile: MagisterProfile | undefined = undefined;

  async authenticate(school: string, token: string) {
    this._profile = await MagisterProfile.create(school, token);
  }

  public get profile(): MagisterProfile | undefined {
    return this._profile;
  }
}
