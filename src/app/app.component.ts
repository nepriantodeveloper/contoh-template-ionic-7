import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) { 
    this.ceklogin();
  }

  async ceklogin() {
    const token = await Preferences.get({ key: 'token' });
    const UserID = await Preferences.get({ key: 'UserID' });
    if (token.value == null) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.router.navigateByUrl('/tabs/beranda', { replaceUrl: true });
    }
  }
}
