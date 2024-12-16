import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQualificationComponent } from './build-qualification.component';

describe('BuildQualificationComponent', () => {
  let component: BuildQualificationComponent;
  let fixture: ComponentFixture<BuildQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildQualificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
