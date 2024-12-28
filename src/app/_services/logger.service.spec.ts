import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("deveria trazer a mensage", () => {
    var retorno = service.log("RETORNO DO LOG")
    expect(retorno).not.toBeNull()
    expect(retorno).toBe("RETORNO DO LOG")
  })
});
