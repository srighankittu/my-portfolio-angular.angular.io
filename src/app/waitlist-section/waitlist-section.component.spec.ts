import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistSectionComponent } from './waitlist-section.component';

describe('WaitlistSectionComponent', () => {
  let component: WaitlistSectionComponent;
  let fixture: ComponentFixture<WaitlistSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitlistSectionComponent]
    });
    fixture = TestBed.createComponent(WaitlistSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
