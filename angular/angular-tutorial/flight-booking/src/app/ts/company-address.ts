import { AbstractAdress } from "./address";

export class CompanyAddress extends AbstractAdress {
  companyName = '';

  toCSV(): string {
    return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
  }
}
