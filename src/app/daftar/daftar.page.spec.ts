import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarPage } from './daftar.page';

describe('DaftarPage', () => {
  let component: DaftarPage;
  let fixture: ComponentFixture<DaftarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
