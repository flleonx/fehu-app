import { Sequelize } from 'sequelize';
import { MigrationFn as SeederFn } from 'umzug';

const seedUsers = [
  {
    firstname: 'Jhon',
    lastname: 'Doe',
    username: 'doedoe',
    email: 'doe@gmail.com',
    password: 'easy',
  },
];

export const up: SeederFn<Sequelize> = async ({ context }) => {
  await context.getQueryInterface().bulkInsert('users', seedUsers);
};

export const down: SeederFn<Sequelize> = async ({ context }) => {
  await context.getQueryInterface().bulkDelete('users', {
    where: {},
  });
};
