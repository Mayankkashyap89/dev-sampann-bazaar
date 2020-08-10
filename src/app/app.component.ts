import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  className: string = "";
    
  onWindowScroll(event) {
    console.log(event, window.pageYOffset);
    if (window.pageYOffset > 5) this.className = "scrolled";
    else this.className = "";
  }
}
