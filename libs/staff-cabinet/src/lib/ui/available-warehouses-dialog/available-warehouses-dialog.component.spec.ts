import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailableWarehousesDialogComponent } from './available-warehouses-dialog.component';

describe('AvailableWarehousesDialogComponent', () => {
  let component: AvailableWarehousesDialogComponent;
  let fixture: ComponentFixture<AvailableWarehousesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableWarehousesDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableWarehousesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
