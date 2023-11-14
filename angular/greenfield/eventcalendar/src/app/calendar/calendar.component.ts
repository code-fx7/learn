import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  modalRef?: BsModalRef;
  title: any;
  presentDays: number = 0;
  absentDays: number = 0;
  events: any = [
    { title: 'Present', date: '2023-11-01', color: '#0000FF'},
    { title: 'Absent', date: '2023-11-02', color: '#FF0000'},
    { title: 'Present', date: '2023-11-03', color: '#0000FF'},
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: this.handleDateClick.bind(this),
  }

  config = {
    animated: true
  };
  @ViewChild('template') template!: string;
  start: any;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.events.forEach((e: { [x: string]: string; }) => {
      if (e["title"] === 'Present') {
        this.presentDays++;
      } else {
        this.absentDays++
      }
    });
    console.log("Present Days: " + this.presentDays);
    console.log("Absent Days: " + this.absentDays);
  }

  handleDateClick(arg: any) {
    console.log(arg);
    console.log(arg.event._def.title);
    this.title = arg.event._def.title;
    this.start = arg.event.start;
    this.modalRef = this.modalService.show(this.template, this.config);
  }
}
