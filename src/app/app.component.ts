import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular Capacitor Project';
  location: any;
  image = '';

  ngOnInit(): void {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    this.location = await Geolocation.getCurrentPosition();
    console.log('location - ', JSON.stringify(this.location));
  }

  capturePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });
    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`
    }
  };
}
