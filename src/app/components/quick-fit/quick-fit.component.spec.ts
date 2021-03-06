import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuickFitComponent } from './quick-fit.component';

describe('QuickFitComponent', () => {
  let component: QuickFitComponent;
  let fixture: ComponentFixture<QuickFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
