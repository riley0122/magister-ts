import MagisterClass from './class.js';
import MagisterProfile from './MagisterProfile.js';

export class Magister {
  private _profile: MagisterProfile | undefined = undefined;

  async authenticate(school: string, token: string) {
    this._profile = await MagisterProfile.create(school, token);
  }

  public get profile(): MagisterProfile | undefined {
    return this._profile;
  }

  private convert_date(in_date: Date): string {
    return `${in_date.getFullYear()}-${(in_date.getMonth() + 1).toString().padStart(2, '0')}-${in_date.getDate().toString().padStart(2, '0')}`;
  }

  data = {
    get_classes: async (
      date_from: Date,
      date_to: Date
    ): Promise<MagisterClass[]> => {
      const _data = await this.profile?.AuthenticatedRequest(
        `/personen/{*id*}/afspraken?status=1&van=${this.convert_date(date_from)}&tot=${this.convert_date(date_to)}`
      );

      return new Promise((resolve, reject) => {
        if (!_data) reject('No data!');

        const classes = new Array();
        for (const classItem of _data['Items']) {
          classes.push(new MagisterClass(classItem as never));
        }

        resolve(classes);
      });
    },
  };
}
