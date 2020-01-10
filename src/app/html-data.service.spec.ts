import { TestBed } from '@angular/core/testing';

import { HtmlDataService } from './html-data.service';

describe('HtmlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlDataService = TestBed.get(HtmlDataService);
    expect(service).toBeTruthy();
  });
});
