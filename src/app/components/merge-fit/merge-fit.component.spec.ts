import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MergeFitComponent } from './merge-fit.component';

describe('MergeFitComponent', () => {
  let component: MergeFitComponent;
  let fixture: ComponentFixture<MergeFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeFitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MergeFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
