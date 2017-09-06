import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictTestComponent } from './restrict-test.component';

describe('RestrictTestComponent', () => {
  let component: RestrictTestComponent;
  let fixture: ComponentFixture<RestrictTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
