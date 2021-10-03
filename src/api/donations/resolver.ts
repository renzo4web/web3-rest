import Repository from '../../common/base-repository';
import Resolver from '../../common/base-resolver';
import Donation from '../../model/donation';

export default class UserResolver extends Resolver<Donation> {
  constructor() {
    super(new Repository());
  }
}
