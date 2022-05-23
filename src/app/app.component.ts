import { DatePipe } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date: any;
  isValidDate: any;
  todayDay: any;
  todayMonth: any;
  todayYear: any;
  invalid: any;
  constructor() {
    var today = new Date();
    this.todayDay = today.getDate().toString();
    this.todayMonth = (today.getMonth() + 1).toString();
    this.todayYear = today.getFullYear().toString();
    if (this.todayMonth.length == 1) {
      this.todayMonth = '0' + this.todayMonth;
    }
    if (this.todayDay.length == 1) {
      this.todayDay = '0' + this.todayMonth;
    }
    this.isValidDate =
      this.todayYear + '-' + this.todayMonth + '-' + this.todayDay;
    console.log(this.isValidDate);
  }
  checkDate() {
    var bool = false;
    console.log(typeof this.date);
    if (this.date == undefined) {
      alert('Not a valid Date');
    } else {
      this.isValidDate = new Date(this.isValidDate);
      this.date = new Date(this.date);
      if (this.date >= this.isValidDate) {
        alert('Not a valid Date');
      } else {
        alert('Not a valid Date');
      }
    }
  }
  change() {
    console.log(this.date);
  }
  dateKeyUp() {
    console.log(this.date);
  }
}
