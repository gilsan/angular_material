import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: Boolean;
  isAuth = false;
  @Output() sideNavToggle = new EventEmitter<void>();
  @Output() islogin = new EventEmitter<Boolean>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
     this.isLogin =  this.authService.isLogin();
     this.islogin.emit(this.isLogin);
  }

  onToggleSidenav() {
     this.sideNavToggle.emit();
  }

}
