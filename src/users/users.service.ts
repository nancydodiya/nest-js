import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getData(){

        return{message: 'Welcome to api!'};
    }
}
