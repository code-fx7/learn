import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // State
  todos: string[] = []
  todoText = '';

  // Lifecycle
  ngOnInit() {
    const exsistingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(exsistingTodos as string) || [];
  }

  clearInput() {
    this.todoText = '';
  }

  // Events
  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.clearInput();
  }

  clearLocalStorage() {
    localStorage.clear();
    this.todos = [];
  }
}
