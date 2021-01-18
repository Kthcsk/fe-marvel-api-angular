import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsElementComponent } from './comics-element.component';

describe('ComicsElementComponent', () => {
  let component: ComicsElementComponent;
  let fixture: ComponentFixture<ComicsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
