import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FifoPage } from './fifo.page';

describe('FifoPage', () => {
  let component: FifoPage;
  let fixture: ComponentFixture<FifoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FifoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
