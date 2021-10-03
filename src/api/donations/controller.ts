import UserResolver from './resolver';
import CrudController from '../../common/crud-controller';
import Donation from '../../model/donation';

export default class DonationController extends CrudController<Donation> {
  constructor(id?: string, destination?: string) {
    super(id, destination, new UserResolver());
  }
}
