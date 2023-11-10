import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../store/model/associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  baseUrl = 'http://localhost:3000/associate';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Associates[]>(this.baseUrl);
  }

  getByCode(code: number) {
    return this.http.get(this.baseUrl+ '/' + code);
  }

  create(data: Associates) {
    return this.http.post(this.baseUrl, data);
  }

  update(data: Associates) {
    return this.http.put(this.baseUrl + '/' + data.id, data);
  }
  
  delete(code: number) {
    return this.http.get<Associates>(this.baseUrl + '/' + code);
  }
}
