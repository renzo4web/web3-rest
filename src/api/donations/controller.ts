import UserResolver from './resolver';
import CrudController from '../../common/crud-controller';
import User from '../../model/user';

export default class DonationController extends CrudController<User> {
  constructor(id?: string, destination?: string) {
    super(id, destination, new UserResolver());
  }
}
