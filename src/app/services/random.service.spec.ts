import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a random number between two inclusive', () => {
    var result = service.randomBetween(1,6)
    expect(result).toBeInstanceOf(Number)
    expect(result).toBeLessThan(7)
    expect(result).toBeGreaterThan(0)
  })
});
