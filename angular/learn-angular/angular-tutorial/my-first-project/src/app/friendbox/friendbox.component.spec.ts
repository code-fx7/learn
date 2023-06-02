import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendboxComponent } from './friendbox.component';

describe('FriendboxComponent', () => {
  let component: FriendboxComponent;
  let fixture: ComponentFixture<FriendboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendboxComponent]
    });
    fixture = TestBed.createComponent(FriendboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
