import { Controller, Post, Req, UseGuards } from '@nestjs/common';

// Services
import { AuthService } from './auth.service';

// Guards
import { LocalAuthGuard } from './local-auth.guard';

// Decorators
import { Public } from './auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
}
