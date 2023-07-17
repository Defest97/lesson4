import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompComponent } from './my-comp.component';

describe('MyCompComponent', () => {
  let component: MyCompComponent;
  let fixture: ComponentFixture<MyCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCompComponent]
    });
    fixture = TestBed.createComponent(MyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
