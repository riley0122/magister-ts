export default class MagisterSubject {
  private _id: any;
  private _name: string;

  constructor(data: never) {
    this._id = data['Id'];
    this._name = data['Naam'];
  }

  public get id(): any {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}
