import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureStaffNotificationsComponent } from './feature-staff-notifications.component';

describe('FeatureStaffNotificationsComponent', () => {
  let component: FeatureStaffNotificationsComponent;
  let fixture: ComponentFixture<FeatureStaffNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureStaffNotificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureStaffNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
