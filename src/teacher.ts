export default class MagisterTeacher {
  private _id: any;
  private _name: string;
  private _abreviation: string;

  constructor(data: never) {
    this._id = data['Id'];
    this._name = data['Naam'];
    this._abreviation = data['Docentcode'];
  }

  public get id(): any {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get abbreviation(): string {
    return this._abreviation;
  }
}
