import { action, makeAutoObservable } from 'mobx';

import AuthService from './AuthService';

class AuthStore {
  loader: boolean = false;

  confirm: any = null;
  user: any = null;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  signInWithPhone = (phoneNumber: string) => {
    try {
      this.authService.signInWithPhone(phoneNumber).then(
        action(res => {
          this.confirm = res;
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  sendConfirmationCode = (code: string) => {
    try {
      this.authService.sendConfirmationCode(code, this.confirm).then(
        action(res => {
          this.user = res;
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  setLoading = (value: boolean) => {
    this.loader = value;
  };
}

export default AuthStore;
