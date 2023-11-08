import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    dateClick: this.handleDateClick.bind(this),
    plugins: [dayGridPlugin, interaction]
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  handleDateClick(arg: DateClickArg) {
    alert('date click!' + arg.dateStr)
  }
}
