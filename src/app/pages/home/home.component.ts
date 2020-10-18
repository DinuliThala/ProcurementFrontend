import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed = false;

  constructor( private readonly router: Router) {}

  logOut(): any {
    this.router.navigate(['login']);
  }

}
