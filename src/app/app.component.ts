import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  constructor(){
    setTimeout(() => {
      this.title="sakina modi";
    }, 2000);
  }
}
