import { TestBed, async, inject } from '@angular/core/testing';

import { GuardTokenGuard } from './guard-token.guard';

describe('GuardTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardTokenGuard]
    });
  });

  it('should ...', inject([GuardTokenGuard], (guard: GuardTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
