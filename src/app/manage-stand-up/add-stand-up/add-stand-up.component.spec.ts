import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStandUpComponent } from './add-stand-up.component';

describe('AddStandUpComponent', () => {
  let component: AddStandUpComponent;
  let fixture: ComponentFixture<AddStandUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStandUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStandUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
