import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Controllers
import { UsersController } from './users.controller';

// Services
import { UsersService } from './users.service';

// Models
import { User } from '../common/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
