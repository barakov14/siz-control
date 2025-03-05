import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureStaffSizeComponent } from './feature-staff-size.component';

describe('FeatureStaffSizeComponent', () => {
  let component: FeatureStaffSizeComponent;
  let fixture: ComponentFixture<FeatureStaffSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureStaffSizeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureStaffSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
