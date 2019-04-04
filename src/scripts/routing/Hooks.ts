import VueRouter from 'vue-router';
import {Component} from 'vue-property-decorator';
import {Container} from 'typedi';
import {IdentityStore} from '@albavulpes/ui-core/dist/stores/auth/IdentityStore';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
]);
