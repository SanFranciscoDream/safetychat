import AbstractModel from '../../../base/AbstractModel';
import { Nullable } from '../../../base/types/BaseTypes';

export class User extends AbstractModel {
  uid: Nullable<string> = null;
  phoneNumber: Nullable<string> = null;
  displayName: Nullable<string> = null;
  photoURL: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
