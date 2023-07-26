export abstract class AbstractAdress {
  id = 0;
  street = '';
  zipCode = '';
  city = '';

  constructor(id: number) {
    this.id = id;
  }

  fullAddress(): string {
    return this.street + ', ' + this.zipCode + '' + this.city;
  }

  abstract toCSV(): string;
}
