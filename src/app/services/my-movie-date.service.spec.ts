import { TestBed } from '@angular/core/testing';

import { MyMovieDateService } from './my-movie-date.service';

describe('MyMovieDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMovieDateService = TestBed.get(MyMovieDateService);
    expect(service).toBeTruthy();
  });
});
