import { showMessage } from 'react-native-flash-message';

export default class Notification {
  static showSuccess = (successMessage: string) => {
    showMessage({
      message: successMessage,
      type: 'success',
      icon: 'success',
    });
  };

  static showError = (errorMessage: string) => {
    showMessage({
      message: errorMessage,
      type: 'danger',
      icon: 'danger',
    });
  };
}
