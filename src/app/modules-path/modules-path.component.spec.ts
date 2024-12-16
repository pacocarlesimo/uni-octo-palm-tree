import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesPathComponent } from './modules-path.component';

describe('ModulesPathComponent', () => {
  let component: ModulesPathComponent;
  let fixture: ComponentFixture<ModulesPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
