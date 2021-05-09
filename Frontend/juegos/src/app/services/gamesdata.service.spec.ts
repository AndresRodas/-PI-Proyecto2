import { TestBed } from '@angular/core/testing';

import { GamesdataService } from './gamesdata.service';

describe('GamesdataService', () => {
  let service: GamesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
