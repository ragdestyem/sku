import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import axios from "axios";
import instance from './service/axios';

@Injectable()
export class UserService {

  async findMyInfo(tkn: string){
    const data = await instance.get('/realms/carlos/protocol/openid-connect/userinfo', {
      headers:{
        Authorization: 'Bearer ' + tkn
      }
    });
    return data.data
  }

}
