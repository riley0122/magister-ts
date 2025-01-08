export default class MagisterClassRoom {
  private _name: string;

  constructor(data: never) {
    this._name = data['Naam'];
  }

  public get name(): string {
    return this._name;
  }
}
