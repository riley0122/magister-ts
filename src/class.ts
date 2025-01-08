import MagisterClassRoom from './classroom.js';
import MagisterSubject from './subject.js';
import MagisterTeacher from './teacher.js';

export default class MagisterClass {
  private _id: string;
  private _ClassStart: string;
  private _ClassEnd: string;
  private _wholeDay: boolean;
  private _description: string;
  private _location: string;
  private _content: string;
  private _remark: string;
  private _note: string;
  private _finished: boolean;
  private _repeatStatus: any;
  private _repeat: any;
  private _subjects: MagisterSubject[];
  private _teachers: MagisterTeacher[];
  private _classRooms: MagisterClassRoom[];
  private _hasAttachments: boolean;
  private _attachements: any;

  private _infoType: any;
  private _status: any;
  private _type: any;
  private _subtype: any;
  private _isOnline: boolean;
  private _viewType: any;
  private _assignmentId: any;
  private _groups: any;

  constructor(data: never) {
    this._id = data['Id'];
    this._ClassStart = data['Start'];
    this._ClassEnd = data['Einde'];
    this._wholeDay = data['DuurtHeleDag'];
    this._description = data['Omschrijving'];
    this._location = data['Lokatie'];
    this._content = data['Inhoud'];
    this._remark = data['Opmerking'];
    this._note = data['Aantekening'];
    this._finished = data['Afgerond'];
    this._repeatStatus = data['HerhaalStatus'];
    this._repeat = data['Herhaling'];

    this._subjects = new Array();
    for (const subject in data['Vakken'] as never[]) {
      this._subjects.push(new MagisterSubject(subject as never));
    }

    this._teachers = new Array();
    for (const teacher in data['Docenten'] as never[]) {
      this._teachers.push(new MagisterTeacher(teacher as never));
    }

    this._classRooms = new Array();
    for (const classRoom in data['Lokalen'] as never[]) {
      this._classRooms.push(new MagisterClassRoom(classRoom as never));
    }

    this._hasAttachments = data['HeeftBijlagen'];
    this._attachements = data['Bijlagen'];

    this._infoType = data['InfoType'];
    this._status = data['Status'];
    this._type = data['Type'];
    this._subtype = data['SubType'];
    this._isOnline = data['IsOnlineDeelname'];
    this._viewType = data['WeergaveType'];
    this._assignmentId = data['OpdrachtId'];
    this._groups = data['Groepen'];
  }

  public get id(): string {
    return this._id;
  }

  public get ClassStart(): string {
    return this._ClassStart;
  }

  public get ClassEnd(): string {
    return this._ClassEnd;
  }

  public get wholeDay(): boolean {
    return this._wholeDay;
  }

  public get description(): string {
    return this._description;
  }

  public get location(): string {
    return this._location;
  }

  public get content(): string {
    return this._content;
  }

  public get remark(): string {
    return this._remark;
  }

  public get note(): string {
    return this._note;
  }

  public get finished(): boolean {
    return this._finished;
  }

  public get repeatStatus(): any {
    return this._repeatStatus;
  }

  public get repeat(): any {
    return this._repeat;
  }

  public get subjects(): MagisterSubject[] {
    return this._subjects;
  }

  public get teachers(): MagisterTeacher[] {
    return this._teachers;
  }

  public get classRooms(): MagisterClassRoom[] {
    return this._classRooms;
  }

  public get hasAttachments(): boolean {
    return this._hasAttachments;
  }

  public get attachments(): any {
    return this._attachements;
  }

  public get infoType(): any {
    return this._infoType;
  }

  public get status(): any {
    return this._status;
  }

  public get type(): any {
    return this._type;
  }

  public get subtype(): any {
    return this._subtype;
  }

  public get isOnline(): boolean {
    return this._isOnline;
  }

  public get viewType(): any {
    return this._viewType;
  }

  public get assignmentId(): any {
    return this._assignmentId;
  }

  public get groups(): any {
    return this._groups;
  }
}
