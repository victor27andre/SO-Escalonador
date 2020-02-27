import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoundRobinPage } from './round-robin.page';

describe('RoundRobinPage', () => {
  let component: RoundRobinPage;
  let fixture: ComponentFixture<RoundRobinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundRobinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoundRobinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
