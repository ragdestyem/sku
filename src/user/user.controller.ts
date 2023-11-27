import { Controller, Get, Post, Body, Patch, Param, Delete,Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
   infoUser(@Headers('Authorization') authorizationHeader: string) {
    const token = authorizationHeader?.split(' ')[1];
    return this.userService.findMyInfo(token)

  }
}
