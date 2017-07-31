import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import {TodoService} from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
