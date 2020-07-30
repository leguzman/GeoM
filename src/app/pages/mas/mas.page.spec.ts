import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasPage } from './mas.page';

describe('MasPage', () => {
  let component: MasPage;
  let fixture: ComponentFixture<MasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
