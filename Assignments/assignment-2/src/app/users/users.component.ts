import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

// Add a Inoput which updates a property ('username') via two way binding -- done
// output the username property via String Interpolation (in a p below the input) -- done
// Add a button which may only be clicked if the username is NOT an empty string
// Upon clicking  the button, the username should be reset to an empty string
export class UsersComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {}

  updateUsername(event: any) {
    this.username = event.target.value;
  }

  clearInput() {
    this.username = '';
  }
}
