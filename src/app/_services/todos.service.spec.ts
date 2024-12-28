import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { TODO_STRING } from '../../../server/db-data';
import { Todo } from '../_models/Todo';

describe('TodosService', () => {

  let todosService: TodosService;
 let httpTestController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    todosService = TestBed.inject(TodosService);
    httpTestController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });
  it('deve retornar todos os services', () => {
    todosService.getAll().subscribe((response) => {
      expect(response).toBeTruthy()
      expect(response.length).toEqual(200)
    })
    const req = httpTestController.expectOne(environment.apiUrl +  'todos');
    expect(req.request.method).toEqual("GET")
  })
  it('deve retornar o valor do texto da requisicao', async () => {

    todosService.getById(3).subscribe((response) => {
 expect(response).not.toBeNull()
expect(response).not.toBeNull()
    expect(response.title).toEqual("fugiat veniam minus");
    expect(response.id).toBe(3)

    })
    const req = httpTestController.expectOne(environment.apiUrl +  'todos/3');
    expect(req.request.method).toEqual("GET")
     req.flush(JSON.parse(TODO_STRING))


    httpTestController .verify();

  })
});

