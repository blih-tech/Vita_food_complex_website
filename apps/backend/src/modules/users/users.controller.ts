import {
  Controller, Get, Post, Put, Delete,
  Body, Param, UseGuards, HttpCode, HttpStatus, Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ── Current user ──────────────────────────────────────────────────
  @Get('me')
  async getMe(@Request() req: any) {
    const user = await this.usersService.findById(req.user.sub);
    return user;
  }

  @Put('me')
  async updateMe(@Request() req: any, @Body() body: { name?: string }) {
    return this.usersService.update(req.user.sub, { name: body.name });
  }

  @Put('me/password')
  @HttpCode(HttpStatus.OK)
  async changeMyPassword(
    @Request() req: any,
    @Body() body: { password: string },
  ) {
    await this.usersService.updatePasswordById(req.user.sub, body.password);
    return { message: 'Password updated' };
  }

  // ── Admin: all users ──────────────────────────────────────────────
  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('admin')
  create(
    @Body() body: { name: string; email: string; password: string; role: string },
  ) {
    return this.usersService.create(body);
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles('admin')
  update(
    @Param('id') id: string,
    @Body() body: { name?: string; email?: string; role?: string },
  ) {
    return this.usersService.update(id, body);
  }

  @Put(':id/password')
  @HttpCode(HttpStatus.OK)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async updateUserPassword(
    @Param('id') id: string,
    @Body() body: { password: string },
  ) {
    await this.usersService.updatePasswordById(id, body.password);
    return { message: 'Password updated' };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id);
    return { message: 'User deleted' };
  }
}
