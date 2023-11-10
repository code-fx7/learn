import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { getAssociateList } from 'src/app/store/associate/associate.selectors';
import { Associates } from 'src/app/store/model/associate.model';
import { loadAssociate } from 'src/app/store/associate/associate.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.scss']
})
export class AssociatelistingComponent implements OnInit {
  accosiateList!: Associates[];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayolums: string[] = ['code', 'name', 'email', 'phone', 'address', 'type', 'group', 'status', 'action'];

  constructor(private dialog: MatDialog, private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadAssociate());
    this.store.select(getAssociateList).subscribe(item => {
      this.accosiateList = item;
      this.dataSource = new MatTableDataSource<Associates>(this.accosiateList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  functionAdd() {
    this.openPopup(0, 'Create Associate');
  }

  openPopup(code: number, title: string) {
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })
  }
}
