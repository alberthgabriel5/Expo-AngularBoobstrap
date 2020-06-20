import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddValidateComponent } from './student-add-validate.component';

describe('StudentAddValidateComponent', () => {
  let component: StudentAddValidateComponent;
  let fixture: ComponentFixture<StudentAddValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
