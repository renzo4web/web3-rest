import { extractPayload, serverTest } from './helpers';
//const { extractPayload } = require('./helpers');
//const { serverTest } = require('./helpers');

interface IDonation {
  id?: string;
  amount: number;
  donor: string;
  destination: string;
}

serverTest('[GET] /api/users should return 200 status', async (server, t) => {
  const response = await server.inject({
    method: 'GET',
    url: '/api/donations',
  });

  const payload = extractPayload<IDonation[]>(response);

  t.equals(response.statusCode, 200, 'Status code is 200');
  t.equals(payload.data.length, 0, 'Data is empty');
});

serverTest('[POST] /api/users should return 201', async (server, t) => {
  const response = await server.inject({
    method: 'POST',
    url: '/api/donations',
    payload: {
      amount: 100,
      name: 'Renzo',
      destination: 'Greenpeace',
    },
  });

  const payload = extractPayload<IDonation>(response);

  t.equal(response.statusCode, 200, 'Status is 200');
  t.assert(typeof payload.data.id === 'string', 'ID is a string');
});
