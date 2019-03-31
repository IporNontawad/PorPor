import { TestBed } from '@angular/core/testing';

import { CommomServiceService } from './commom-service.service';

describe('CommomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommomServiceService = TestBed.get(CommomServiceService);
    expect(service).toBeTruthy();
  });
});
