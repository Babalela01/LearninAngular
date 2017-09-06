import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictViewComponent } from './restrict-view.component';

describe('RestrictViewComponent', () => {
  let component: RestrictViewComponent;
  let fixture: ComponentFixture<RestrictViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
