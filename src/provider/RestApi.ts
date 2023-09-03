import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AlertController, LoadingController, ToastController } from "@ionic/angular";


@Injectable()
export class RestApi {


  server: string = "https://reqres.in/api/";

  isLoading = false;
  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  post(body: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    let url = this.server + api;
    return this.http.post(url, JSON.stringify(body), httpOptions).pipe((res: any) => res);
  }

  get(api: string) {
    let url = this.server + api;
    return this.http.get(url).pipe((res: any) => res);
  }

 

 

  async toastNotif(message: any) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration:3000,
      cssClass: 'custom-toast',
      buttons: ['ok'],
    });
    return await toast.present();
  }

  async alertpeNotif(message: any) {
    const alert = await this.alertCtrl.create({
      message: message,
      buttons: ['ok'],
    });
    return await alert.present();
  }

  async showLoading(message: any) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: message,
      spinner: "bubbles",
      duration: 3000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
  async alertDismiss() {
    await this.alertCtrl.dismiss();
  }

  async toastDismiss() {
    await this.toastCtrl.dismiss();
  }

  async ambiltoken() {
    const ret = await Preferences.get({ key: 'token' });
    return ret.value
  }

  async ambilUser() {
    const ret = await Preferences.get({ key: 'UserId' });
    return ret.value
  }
}