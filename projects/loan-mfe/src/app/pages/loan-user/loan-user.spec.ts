import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanUser } from './loan-user';

describe('LoanUser', () => {
  let component: LoanUser;
  let fixture: ComponentFixture<LoanUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanUser],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
