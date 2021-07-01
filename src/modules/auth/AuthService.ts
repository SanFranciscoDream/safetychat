import auth from '@react-native-firebase/auth';
import Notification from '../../base/ui/Notification';

import AuthFactory from './AuthFactory';
import { User } from './models/User';

export default class AuthService {
  authFactory: AuthFactory;

  constructor() {
    this.authFactory = new AuthFactory();
  }

  signInWithPhone = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

      return confirmation;
    } catch (e: any) {
      Notification.showError(JSON.stringify(e.message));
    }
  };

  sendConfirmationCode = async (code: string, confirm: any) => {
    try {
      const data = await confirm.confirm(code);

      return this.authFactory.create<User>(User, data?.user?._user);
    } catch (e: any) {
      Notification.showError(JSON.stringify(e.message));
    }
  };

  checkIsAuth = async () => {
    try {
      const data: any = await auth().currentUser;

      return this.authFactory.create<User>(User, data?._user);
    } catch (e: any) {
      Notification.showError(JSON.stringify(e.message));
    }
  };

  logout = async () => {
    try {
      const data = await auth().signOut();

      return data;
    } catch (e: any) {
      Notification.showError(JSON.stringify(e.message));
    }
  };

  changeUserInfo = async (displayName: string) => {
    try {
      const user = auth().currentUser;
      await user?.updateProfile({
        displayName,
      });

      return this.authFactory.create<User>(User, (auth().currentUser as any)?._user);
    } catch (e: any) {
      Notification.showError(JSON.stringify(e.message));
    }
  };
}
