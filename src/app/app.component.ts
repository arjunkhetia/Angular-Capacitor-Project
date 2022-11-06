import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular-Capacitor-Project';
  location: any;

  ngOnInit(): void {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    this.location = await Geolocation.getCurrentPosition();
  }
}
