import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRootComponent } from './forms-root.component';

describe('FormsRootComponent', () => {
  let component: FormsRootComponent;
  let fixture: ComponentFixture<FormsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
