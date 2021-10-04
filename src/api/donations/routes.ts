import * as Hapi from '@hapi/hapi';
import * as Path from 'path';
import DonationController from './controller';
import validate from './validate';
import Logger from '../../helper/logger';
import IRoute from '../../helper/route';

export default class UserRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise<void>(resolve => {
      Logger.info('UserRoutes - Start adding user routes');

      // Passing ID by constructor it's not neccesary as default value it's 'id'
      const controller = new DonationController('DONATION_ID');

      server.route([
        {
          method: 'GET',
          path: '/{any*}',
          handler: {
            file: 'index.html',
          },
        },
        {
          method: 'POST',
          path: '/api/donations',
          options: {
            handler: controller.create,
            validate: validate.create,
            description: 'Method that creates a donation.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
        {
          method: 'PUT',
          path: `/api/donations/{${controller.id}}`,
          options: {
            handler: controller.updateById,
            validate: validate.updateById,
            description: 'Method that updates a donation by its id.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: `/api/donations/{${controller.id}}`,
          options: {
            handler: controller.getById,
            validate: validate.getById,
            description: 'Method that get a donation by its id.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: '/api/donations',
          options: {
            handler: controller.getAll,
            description: 'Method that gets all donations.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
        {
          method: 'DELETE',
          path: `/api/donations/{${controller.id}}`,
          options: {
            handler: controller.deleteById,
            validate: validate.deleteById,
            description: 'Method that deletes a donation by its id.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: `/api/donations/destination={${controller.destination}}`,
          options: {
            handler: controller.getByDestination,
            description:
              'Method that gets donations of an Organization/Destination.',
            tags: ['api', 'donations'],
            auth: false,
          },
        },
      ]);

      Logger.info('UserRoutes - Finish adding user routes');

      resolve();
    });
  }
}
