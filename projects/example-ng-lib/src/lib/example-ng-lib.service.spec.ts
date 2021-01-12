import { TestBed } from '@angular/core/testing';

import { ExampleNgLibService } from './example-ng-lib.service';

describe('ExampleNgLibService', () => {
  let service: ExampleNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
