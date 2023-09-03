import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { RestApi } from 'src/provider/RestApi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:any;
  password:any;
  constructor(private router : Router,private api:RestApi) {}

  daftar(){
    this.router.navigateByUrl('daftar');
  }

  login(){
    let body={
      email:this.email,
      password:this.password
    }
    this.api.post(body,'login').subscribe((res:any)=>{
      this.api.toastNotif('anda berhasil login');
      Preferences.set( { key: 'token', value: res.token });
      this.router.navigateByUrl('/tabs/beranda', { replaceUrl: true });
      console.log(res);
    });
  }

}
