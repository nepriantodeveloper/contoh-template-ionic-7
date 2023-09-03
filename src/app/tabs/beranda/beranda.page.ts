import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Swiper } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { CartService } from 'src/app/sevices/cartservice.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  cartItems = 0;
  slideOpts = {
    autoplay: {
      delay: 2000,
    },
    zoom: false,
    effect: 'flip'
  };

  constructor(private router: Router, public cart: CartService,) {
    this.cart.getCartTotal().subscribe(val => {
      this.cartItems = val;
    });
  }
  sliderConfig = {
    zoom: false,
    slidesPerView: 1.8,
    spaceBetween: 10,
    centeredSlides: false
  };
  ngOnInit() {
  }

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];

  keluar() {
    Preferences.clear();
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  addCart() {
    const itemCount = this.cartItems + 1;
    this.cart.setCartTotal(itemCount);

  }

}
