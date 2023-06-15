import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOutComponent } from './record-out.component';

describe('RecordOutComponent', () => {
  let component: RecordOutComponent;
  let fixture: ComponentFixture<RecordOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordOutComponent]
    });
    fixture = TestBed.createComponent(RecordOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
