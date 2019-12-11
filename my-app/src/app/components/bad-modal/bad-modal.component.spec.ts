import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadModalComponent } from './bad-modal.component';

describe('BadModalComponent', () => {
  let component: BadModalComponent;
  let fixture: ComponentFixture<BadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
