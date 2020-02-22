import { RabbitMQModule }          from '@nestjs-plus/rabbitmq';
import { MessagingClient }         from '@nestjs.pro/common/dist/messaging/MessagingClient';
import { MonitoringModule }        from '@nestjs.pro/monitoring';
import { AppModule as RBACModule } from '@nestjs.pro/rbac/dist/AppModule';
import { Module }                  from '@nestjs/common';
import * as dotenv                 from 'dotenv';
import { RBAC_DEFAULT_ROLES }      from './_lib/RBAC';
import { StartupService }          from './_lib/StartupService';
import { LocalRBACMessageBus }     from './LocalRBACMessageBus';

dotenv.config();

@Module({

    imports: [
        // JwtModule.register({ secret: 'changeme' }),
        //
        // TypeOrmModule.forRoot({
        //
        //     type: 'mysql',
        //     host: process.env.DB_HOSTNAME || 'localhost',
        //     port: Number.parseInt(process.env.DB_PORT) || 3306,
        //     username: process.env.DB_USERNAME || 'root',
        //     password: process.env.DB_PASSWORD || 'mysql',
        //     database: process.env.DB_NAME || 'nestjs',
        //     synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
        //     keepConnectionAlive: true,
        //     entities: [
        //
        //         ...RBAC_ENTITIES
        //
        //     ]
        //
        // }),
        //

        RBACModule.forRoot({

            initializeModuleDefaults: false,
            roles: RBAC_DEFAULT_ROLES

        }),

        MonitoringModule.forRoot({

            exposePublicEndpoint: true

        }),

        RabbitMQModule.forRoot({

            exchanges: [ { name: process.env.RABBITMQ_EXCHANGE, type: 'topic' } ],
            uri: process.env.RABBITMQ_URI

        })

    ],

    providers: [

        LocalRBACMessageBus,
        MessagingClient,
        StartupService

    ]

})
export class LocalRBACModule {

}
