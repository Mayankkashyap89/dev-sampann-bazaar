import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  route: Router;
  
  constructor(private router: Router) {
    this.route = router;
  }

  className: string = "";
    
  onWindowScroll(event) {
    console.log(event, window.pageYOffset);
    // if (window.pageYOffset > 5) this.className = "scrolled";
    // else this.className = "";
  }
}
