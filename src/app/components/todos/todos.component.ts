import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() {
    this.todos = [];
   }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        completed: false
      },
      {
        id: 2,
        title: 'Master Angular',
        completed: false
      }
    ]
  }

}
