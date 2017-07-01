import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }
// /api/todos
  // Get all todos from the API
  getAllTodos() {
    return this.http.get('/api/todos')
      .map(res => res.json());
  }
}
