import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private router: Router,
     private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
     this.authService.isLogined();
     this.router.navigate(['/training']);
  }

}
