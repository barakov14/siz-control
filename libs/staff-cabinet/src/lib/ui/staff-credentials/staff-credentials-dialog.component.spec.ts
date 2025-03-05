import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffCredentialsDialogComponent } from './staff-credentials-dialog.component';

describe('StaffCredentialsDialogComponent', () => {
  let component: StaffCredentialsDialogComponent;
  let fixture: ComponentFixture<StaffCredentialsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCredentialsDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffCredentialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
