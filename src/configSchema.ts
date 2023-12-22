import * as Joi from 'joi';

const configSchema = Joi.object({
  API_KEY: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  PG_USER: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
  PG_HOST: Joi.string().required(),
  PG_PORT: Joi.number().required(),
  PGADMIN_EMAIL: Joi.string().required(),
  PGADMIN_PASSWORD: Joi.string().required(),
});

export default configSchema;
