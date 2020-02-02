import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCliProject';

  onSubmit(){
    var s = 2;
    console.log(s);
    
  }
}
