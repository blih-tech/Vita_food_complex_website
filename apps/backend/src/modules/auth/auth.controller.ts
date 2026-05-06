import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  // One-time setup endpoint — creates or resets admin with fresh bcrypt hash
  @HttpCode(HttpStatus.OK)
  @Post('setup')
  async setup() {
    const existing = await this.usersService.findByEmail('admin@vitafoodcomplex.com');
    if (existing) {
      await this.usersService.updatePassword('admin@vitafoodcomplex.com', 'adminpassword');
      return { message: 'Admin password reset with fresh hash' };
    }
    await this.usersService.create({
      name: 'Vita Admin',
      email: 'admin@vitafoodcomplex.com',
      password: 'adminpassword',
      role: 'admin',
    });
    return { message: 'Admin created successfully' };
  }
}
