import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRootComponent } from './material-root.component';

describe('MaterialRootComponent', () => {
  let component: MaterialRootComponent;
  let fixture: ComponentFixture<MaterialRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
