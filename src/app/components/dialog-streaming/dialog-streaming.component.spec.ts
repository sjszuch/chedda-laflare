import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStreamingComponent } from './dialog-streaming.component';

describe('DialogStreamingComponent', () => {
  let component: DialogStreamingComponent;
  let fixture: ComponentFixture<DialogStreamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogStreamingComponent]
    });
    fixture = TestBed.createComponent(DialogStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
