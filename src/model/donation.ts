export default class Donation {
  public _id: string;

  public amount: number;

  public donor: string;

  public destination: string;

  public creationDate: Date;

  constructor(name: string) {
    this._id = 'test';
    this.donor = name;
    this.amount = 100;
    this.destination = 'Greenpeace';
    this.creationDate = new Date();
  }

  public toString() {
    return `DonationID: ${this._id}, Amount: ${this.amount}, Donor: ${this.donor}, Destination: ${this.destination}`;
  }
}
