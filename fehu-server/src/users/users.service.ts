import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from '../common/models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async getUser(userIdentifier: string): Promise<User | undefined> {
    try {
      const user = await this.userModel.findOne({
        where: {
          [Op.or]: [{ username: userIdentifier }, { email: userIdentifier }],
        },
      });

      if (!user) return undefined;

      return user;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async getUserById(id: number): Promise<User | undefined> {
    try {
      const user = await this.userModel.findByPk(id);

      if (!user) return undefined;

      return user;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
