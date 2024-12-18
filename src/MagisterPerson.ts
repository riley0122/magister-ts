export default class MagisterPerson {
  private _id: number;
  private _firstName: string;
  private _preposition: string;
  private _lastName: string;
  private _officialFirstNames: string;
  private _initials: string;
  private _officialPrepositions: string;
  private _officalLastName: string;
  private _birthday: string;
  private _birthLastName: string;
  private _birthnamePreposition: string;
  private _useBirthname: boolean;
  private _externalId: string;

  constructor(apiResponseData: any) {
    this._id = apiResponseData['Id'];
    this._firstName = apiResponseData['Roepnaam'];
    this._preposition = apiResponseData['Tussenvoegsel'] ?? '';
    this._lastName = apiResponseData['Achternaam'];
    this._officialFirstNames = apiResponseData['OfficieleVoornamen'];
    this._initials = apiResponseData['Voorletters'];
    this._officialPrepositions = apiResponseData['OfficieleTussenvoegsels'];
    this._officalLastName = apiResponseData['OfficieleAchternaam'];
    this._birthday = apiResponseData['Geboortedatum'];
    this._birthLastName = apiResponseData['GeboorteAchternaam'];
    this._birthnamePreposition = apiResponseData['GeboortenaamTussenvoegsel'];
    this._useBirthname = apiResponseData['GebruikGeboortenaam'];
    this._externalId = apiResponseData['ExterneId'];
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get preposition(): string {
    return this._preposition;
  }

  get lastName(): string {
    return this._lastName;
  }

  get officialFirstNames(): string {
    return this._officialFirstNames;
  }

  get initials(): string {
    return this._initials;
  }

  get officialPrepositions(): string {
    return this._officialPrepositions;
  }

  get officalLastName(): string {
    return this._officalLastName;
  }

  get birthday(): string {
    return this._birthday;
  }

  get birthLastName(): string {
    return this._birthLastName;
  }

  get birthnamePreposition(): string {
    return this._birthnamePreposition;
  }

  get useBirthname(): boolean {
    return this._useBirthname;
  }

  get externalId(): string {
    return this._externalId;
  }
}
