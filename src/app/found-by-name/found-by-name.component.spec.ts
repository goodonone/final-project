import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundByNameComponent } from './found-by-name.component';

describe('FoundByNameComponent', () => {
  let component: FoundByNameComponent;
  let fixture: ComponentFixture<FoundByNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundByNameComponent]
    });
    fixture = TestBed.createComponent(FoundByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
