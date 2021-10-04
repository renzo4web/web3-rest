import * as Joi from '@hapi/joi';

export default {
  create: {
    payload: {
      amount: Joi.number()
        .integer()
        .required(),
      donor: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      destination: Joi.string().required(),
    },
  },
  updateById: {
    params: {
      DONATION_ID: Joi.string().required(),
    },
    payload: {
      amount: Joi.number()
        .integer()
        .optional(),
      donor: Joi.string().optional(),
      destination: Joi.string().optional(),
    },
  },
  getById: {
    params: {
      DONATION_ID: Joi.string().required(),
    },
  },
  getByDestination: {
    params: {
      DESTINATION_NAME: Joi.string().required(),
    },
  },
  deleteById: {
    params: {
      DONATION_ID: Joi.string().required(),
    },
  },
};
