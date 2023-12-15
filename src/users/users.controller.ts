import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { getUserGuard } from 'src/auth/getUser.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(getUserGuard)
  @Get('me')
  getMe(@Req() req: any) {
    try {
      const id = req.user.id;
      return this.usersService.getUserById(id);
    } catch (e) {
      throw e;
    }
  }
}
