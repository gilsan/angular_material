import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private islogin: Boolean = false;

  isLogin() {
    return this.islogin;
  }

  isLogined () {
    this.islogin = true;
    return this.islogin;

  }
}
