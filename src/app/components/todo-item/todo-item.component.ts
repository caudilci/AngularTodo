import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private dataService:DataService) { 
    this.todo = new Todo();
  }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo:Todo){
    // UI toggle
    todo.completed = !todo.completed;
    // Server Toggle
    this.dataService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);

  }

}
