import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private dataService:DataService) {
    this.todos = [];
   }

  ngOnInit(): void {
    this.dataService.getTodos().subscribe( todos => {
      this.todos = todos
    }) 
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.dataService.deleteTodo(todo).subscribe(()=>console.log(`Deleted: ${todo.id}`));
  }

  addTodo(todo:Todo) {
    this.dataService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
