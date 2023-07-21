import { Component, Input, Output , EventEmitter,OnInit} from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  todocheckbox: any;
  ngOnInit(): void {
  }
  @Input() todo!: todo;
  @Input() i!: number;

  @Output() tododelete:EventEmitter<todo>= new EventEmitter()

  onClick(){
    this.tododelete.emit(new todo);
    console.log("onclick has been triggered",todo);
  }

  oncheckboxclick(todo: any){
    todo.active=!todo.active;
  }
}
