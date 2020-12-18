import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { MdPage } from './md.page';

describe('MdPage', () => {
  let component: MdPage;
  let fixture: ComponentFixture<MdPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MdPage ],
      imports: [IonicModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
