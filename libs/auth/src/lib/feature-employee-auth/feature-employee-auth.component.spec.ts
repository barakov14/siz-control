import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureEmployeeAuthComponent } from './feature-employee-auth.component';

describe('FeatureEmployeeAuthComponent', () => {
  let component: FeatureEmployeeAuthComponent;
  let fixture: ComponentFixture<FeatureEmployeeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEmployeeAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureEmployeeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
