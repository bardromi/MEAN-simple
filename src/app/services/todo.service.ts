import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(public _http: Http) {
  }

  // /api/todos
  // Get all todos from the API
  getTodos() {
    return this._http.get('http://localhost:3000/api/todos');
  }

  // getTodos() {
  //   return this._http.get('http://localhost:3000/api/todos')
  //     .map(res => res.json());
  // }

  saveTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/todos', JSON.stringify(todo), {headers: headers});
  }

  updateTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:3000/api/todos/' + todo._id, JSON.stringify(todo), {headers: headers});
  }

  deleteTodo(id){
    return this._http.delete('http://localhost:3000/api/todos/'+id);
  }
}
