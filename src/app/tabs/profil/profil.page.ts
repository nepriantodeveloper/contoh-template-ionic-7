import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  keluar() {
    Preferences.clear();
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
