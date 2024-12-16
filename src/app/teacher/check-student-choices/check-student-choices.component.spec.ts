import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentChoicesComponent } from './check-student-choices.component';

describe('CheckStudentChoicesComponent', () => {
  let component: CheckStudentChoicesComponent;
  let fixture: ComponentFixture<CheckStudentChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckStudentChoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckStudentChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
