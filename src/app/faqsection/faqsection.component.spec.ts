import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQSectionComponent } from './faqsection.component';

describe('FAQSectionComponent', () => {
  let component: FAQSectionComponent;
  let fixture: ComponentFixture<FAQSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQSectionComponent]
    });
    fixture = TestBed.createComponent(FAQSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
