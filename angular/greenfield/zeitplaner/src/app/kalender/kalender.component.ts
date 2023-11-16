import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction, { DateClickArg } from '@fullcalendar/interaction';
import { ZeiterfassungsDialogComponent } from '../zeiterfassungs-dialog/zeiterfassungs-dialog.component';

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ],
    dateClick: this.handleDateClick.bind(this),
  };
  
  constructor(private dialog: MatDialog) {}

  handleDateClick(arg: DateClickArg) {
    this.dialog.open(ZeiterfassungsDialogComponent, {
      data: {
        selectedDate: arg.date
      }
    });
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }
}
