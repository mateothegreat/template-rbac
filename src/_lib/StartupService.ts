import { UsersService }             from '@nestjs.pro/rbac/dist/Users/UsersService';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class StartupService implements OnModuleInit {

    public constructor(private readonly usersService: UsersService) {

    }

    public async onModuleInit() {

        const user = await this.usersService.register({

            email: 'test@test.com',
            password: 'asdfasdf'

        }).catch(e => console.log(e));

        console.log(user);


    }
}
