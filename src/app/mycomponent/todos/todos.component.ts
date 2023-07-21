import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    localItem!:null;
    todos !: todo[];
    constructor(){
      
      console.log(localStorage.getItem("todos"));
      // this.localItem =JSON.parse(localStorage.getItem("todos") || '{}');
      if(this.localItem==null){
        this.todos=[];
      }
      else{
        this.todos=  this.localItem;
      }
        

    }
    
    deletetodo(todo:todo){
      console.log(todo);
      const index =this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    addtodo(todo:todo){
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos))

    }

    toggletodo(todo:todo){
      const index =this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos))

    }
}
