import { Sequelize } from 'sequelize';
import { SequelizeStorage } from 'umzug';

import { migratorInitializer } from './migrator';
import { seederInitializer } from './seeder';

export const umzugInitializer = (sequelizeInstance: Sequelize) => {
  const migrator = migratorInitializer({
    migrations: {
      glob: ['./migrations/*.js', { cwd: __dirname }],
    },
    context: sequelizeInstance,
    storage: new SequelizeStorage({
      sequelize: sequelizeInstance,
    }),
    logger: console,
  });

  const seeder = seederInitializer({
    migrations: {
      glob: ['./seeders/*.js', { cwd: __dirname }],
    },
    context: sequelizeInstance,
    storage: new SequelizeStorage({
      sequelize: sequelizeInstance,
    }),
    logger: console,
  });

  return { migrator, seeder };
};
