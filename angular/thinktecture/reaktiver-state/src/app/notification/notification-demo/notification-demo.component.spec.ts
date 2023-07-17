import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDemoComponent } from './notification-demo.component';

describe('NotificationDemoComponent', () => {
  let component: NotificationDemoComponent;
  let fixture: ComponentFixture<NotificationDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationDemoComponent]
    });
    fixture = TestBed.createComponent(NotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
