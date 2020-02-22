import { RabbitRPC }       from '@nestjs-plus/rabbitmq';
import { MessagingMethod } from '@nestjs.pro/common/dist/messaging/MessagingMethod';
import { UsersService }    from '@nestjs.pro/rbac/dist/Users/UsersService';
import { Injectable }      from '@nestjs/common';

@Injectable()
export class LocalRBACMessageBus {

    public constructor(private readonly usersService: UsersService) {

    }

    @RabbitRPC({

        exchange: process.env.RABBITMQ_EXCHANGE,
        routingKey: 'rbac',
        queue: 'rbac'

    })
    public async handleMessage(methodCall: MessagingMethod) {

        console.log(methodCall);

        return new Promise(async (resolve, reject) => {

            if (this[ methodCall.serviceName ][ methodCall.methodName ]) {

                const result = await this[ methodCall.serviceName ][ methodCall.methodName ](methodCall.args).catch(e => {

                    console.log(e);

                    resolve(e);

                });

                console.log(result);

                resolve(result || null);

            } else {

                resolve('method not found');

            }

        });

    }

}
