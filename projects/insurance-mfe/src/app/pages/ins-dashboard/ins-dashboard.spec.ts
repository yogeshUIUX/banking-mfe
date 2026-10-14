import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsDashboard } from './ins-dashboard';

describe('InsDashboard', () => {
  let component: InsDashboard;
  let fixture: ComponentFixture<InsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(InsDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
