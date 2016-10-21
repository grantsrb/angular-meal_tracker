export class Food {
  public static idCount: number = 0;
  public id: number;
  public edit: boolean;
  constructor(public name: string, public description: string, public caloricContent: number, public date: string) {
    this.id = Food.idCount++;
    this.edit = false;
  }
}
