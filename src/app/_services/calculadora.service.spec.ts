import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
let loggerSpy:any;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
    TestBed.configureTestingModule({
      providers: [CalculadoraService,
        {
          provide: LoggerService, useValue: loggerSpy
        }
      ],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {


    expect(service).toBeTruthy();
  });

  it('should add the numbers', () => {
    const soma:number|null = service.calcular(2,3, 'adicao');
    expect(soma).toBe(5)
  })
  it("should subtract the numbers", () => {
    const subtrair:number|null = service.calcular(2,3, 'subtracao')
    expect(subtrair).toBe(-1);
  })

  it("should divide the numbers", ()=> {
    const divisao: number|null =   service.calcular(6,2, 'divisao')
  expect(divisao).toBe(3);
  })
  it("should multiply the numbers", () => {
    const multiplicacao: number|null = service.calcular(2,3, "multiplicacao")
    expect(multiplicacao).toBe(6)

  })
  it("should return null value", () => {
    const operacaoNula: number|null= service.calcular(2,3,"retornar null")
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    expect(operacaoNula).toBeNull();
  })
});
