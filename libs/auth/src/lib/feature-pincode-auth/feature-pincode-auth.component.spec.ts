import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePincodeAuthComponent } from './feature-pincode-auth.component';

describe('FeaturePincodeAuthComponent', () => {
  let component: FeaturePincodeAuthComponent;
  let fixture: ComponentFixture<FeaturePincodeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePincodeAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePincodeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
