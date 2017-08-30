import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBasedFormComponent } from './template-form.component';

describe('TemplateBasedFormComponent', () => {
  let component: TemplateBasedFormComponent;
  let fixture: ComponentFixture<TemplateBasedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBasedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBasedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
