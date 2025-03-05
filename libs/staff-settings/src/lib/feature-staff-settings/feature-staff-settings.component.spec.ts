import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureStaffSettingsComponent } from './feature-staff-settings.component';

describe('FeatureStaffSettingsComponent', () => {
  let component: FeatureStaffSettingsComponent;
  let fixture: ComponentFixture<FeatureStaffSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureStaffSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureStaffSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
