import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-3';
  buttonClicked = false;
  clickLog = [];
  numberOfClicks = 0;

  onClick() {
    this.buttonClicked = !this.buttonClicked;
    this.clickLog.push(this.clickLog.length + 1);
  }
}
