import { action, makeAutoObservable } from 'mobx';

import Navigation from '../../base/Navigation';
import { screens } from '../../navigator/consts/screens';

import AuthService from './AuthService';

class AuthStore {
  loader: boolean = true;

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
      this.authService.sendConfirmationCode(code, this.confirm).then(res => {
        this.checkIsAuth();
      });
    } catch (e) {
      console.log(e);
    }
  };

  checkIsAuth = () => {
    try {
      this.authService.checkIsAuth().then(
        action(res => {
          if (res && res?.uid) {
            console.log('WE HAVE USER!!!!', res);
            this.user = res;
            Navigation.replace(screens.MAIN_APP);
          }
        }),
      );
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        this.setLoading(false);
      }, 1000);
    }
  };

  logout = () => {
    try {
      this.authService.logout().then(
        action(res => {
          this.user = null;
          Navigation.replace(screens.AUTH_AUTHENTIFICATION);
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  changeUserInfo = (displayName: string) => {
    try {
      this.authService.changeUserInfo(displayName).then(
        action(res => {
          if (res && res?.uid) {
            console.log('UPDATE USER!!!!', res);
            this.user = res;
          }
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
