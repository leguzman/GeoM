import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CosechaPage } from './cosecha.page';

describe('CosechaPage', () => {
  let component: CosechaPage;
  let fixture: ComponentFixture<CosechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosechaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CosechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
