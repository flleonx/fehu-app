import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  async getUserById(@Param() params: { id: number }) {
    try {
      const user = await this.usersService.getUserById(params.id);

      return {
        status: 'success',
        data: user,
      };
    } catch (error) {
      console.error(error);
      return {};
    }
  }
}
