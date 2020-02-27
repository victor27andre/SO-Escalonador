import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SjfPage } from './sjf.page';

describe('SjfPage', () => {
  let component: SjfPage;
  let fixture: ComponentFixture<SjfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SjfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
