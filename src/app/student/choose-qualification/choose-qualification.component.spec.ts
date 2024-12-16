import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQualificationComponent } from './choose-qualification.component';

describe('ChooseQualificationComponent', () => {
  let component: ChooseQualificationComponent;
  let fixture: ComponentFixture<ChooseQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseQualificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
