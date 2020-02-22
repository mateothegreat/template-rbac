import { PermissionCreate } from '@nestjs.pro/rbac/dist/Permissions/PermissionCreate';
import { RoleCreate }       from '@nestjs.pro/rbac/dist/Roles/RoleCreate';
import { RBAC_TYPE }        from '@nestjs.pro/rbac/dist/types/RBACTypes';

export const RBAC_PERMISSIONS_CAMERAS: Array<PermissionCreate> = [

    {

        name: 'cameras.search',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'cameras.get',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'cameras.create',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'cameras.update',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'cameras.delete',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'cameras.stream',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }

];

export const RBAC_PERMISSIONS_LOCATIONS: Array<PermissionCreate> = [

    {

        name: 'locations.search',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'locations.get',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'locations.create',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'locations.update',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'locations.delete',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }

];

export const RBAC_DEFAULT_ROLES: Array<RoleCreate> = [

    {

        name: 'cameras.admin',
        description: 'Complete control over cameras & their settings.',
        permissions: RBAC_PERMISSIONS_CAMERAS,
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'locations.admin',
        description: 'Complete control over locations & their settings.',
        permissions: RBAC_PERMISSIONS_LOCATIONS,
        type: RBAC_TYPE.SYSTEM

    }

];
