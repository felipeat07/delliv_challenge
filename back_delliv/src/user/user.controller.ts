import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() userData: any) {
    console.log('Received request to create user:', userData);
    return this.userService.createUser(userData);
  }
}
