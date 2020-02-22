import { Server }          from '@nestjs.pro/common/dist/server/Server';
import { LocalRBACModule } from './LocalRBACModule';

const serverUrls = [];

serverUrls.push('https://api.streamnvr.com/kubernetes');

if (Server.getEnvironment() === 'local') {

    serverUrls.push('http://localhost:10099');

}

Server.bootstrap(LocalRBACModule, 'rbac', Number(process.env.PORT) || 10090, {

    path: 'swagger',
    title: 'RABC API',
    description: 'Role Based Access Control',
    version: '0.0.1',
    tags: [],
    contactName: 'Matthew Davis',
    contactEmail: 'support@streamnvr.com',
    contactUrl: 'https://streamnvr.com',
    docsDescription: 'docs',
    docsUrl: 'https://streamnvr.com',
    serverUrls

}, []);
