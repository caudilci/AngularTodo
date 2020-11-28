import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl:string = 'http://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(`${this.dataUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.dataUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.dataUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }
}
