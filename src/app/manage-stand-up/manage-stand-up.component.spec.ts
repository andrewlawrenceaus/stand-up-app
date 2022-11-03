import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStandUpComponent } from './manage-stand-up.component';

describe('ManageStandUpComponent', () => {
  let component: ManageStandUpComponent;
  let fixture: ComponentFixture<ManageStandUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStandUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageStandUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
