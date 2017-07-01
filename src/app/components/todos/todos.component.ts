import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // instantiate todos to an empty array
  todos: any = [];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    // Retrieve todos from the API
    this.todosService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
