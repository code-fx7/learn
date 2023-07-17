import { Injectable } from "@angular/core";
import { Data } from "@angular/router";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class DataStoreServive {
  private data: Data[] = [];

  private dataSubject = new BehaviorSubject<Array<Data>>(this.data);
  data$ = this.dataSubject.asObservable();

  addData(newData: Data) {
    this.data = [...this.data, newData];
    this.dataSubject.next(this.data);
  }
}
