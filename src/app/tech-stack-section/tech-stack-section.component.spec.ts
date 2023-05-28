import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackSectionComponent } from './tech-stack-section.component';

describe('TechStackSectionComponent', () => {
  let component: TechStackSectionComponent;
  let fixture: ComponentFixture<TechStackSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStackSectionComponent]
    });
    fixture = TestBed.createComponent(TechStackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
