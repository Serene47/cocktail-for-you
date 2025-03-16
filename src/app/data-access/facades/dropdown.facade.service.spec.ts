import { TestBed } from '@angular/core/testing';

import { DropdownFacadeService } from './dropdown.facade.service';

describe('DropdownFacadeService', () => {
  let service: DropdownFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
