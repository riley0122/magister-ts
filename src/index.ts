import MagisterProfile from './MagisterProfile';

export class Magister {
  private _profile: MagisterProfile | undefined = undefined;

  authenticate(school: string, token: string) {
    this._profile = new MagisterProfile(school, token);
  }

  public get profile(): MagisterProfile | undefined {
    return this._profile;
  }
}
