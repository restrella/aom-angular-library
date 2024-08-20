import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibAomlibdemoComponent } from './my-lib-aomlibdemo.component';

describe('MyLibAomlibdemoComponent', () => {
  let component: MyLibAomlibdemoComponent;
  let fixture: ComponentFixture<MyLibAomlibdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibAomlibdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibAomlibdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
