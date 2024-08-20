import { TestBed } from '@angular/core/testing';

import { MyLibAomlibdemoService } from './my-lib-aomlibdemo.service';

describe('MyLibAomlibdemoService', () => {
  let service: MyLibAomlibdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibAomlibdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
