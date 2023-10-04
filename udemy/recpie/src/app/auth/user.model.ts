export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  // Hier wird überprüft ob das _tokenExpirationDate nicht vorhanden ist, oder ob das aktuelle Datum größer ist als _tokenExpirationDate.
  // Dann wäre das Token abgelaufen.
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
