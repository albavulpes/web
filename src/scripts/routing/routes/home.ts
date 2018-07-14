import {RouteConfig} from 'vue-router';

import Home from '../../../components/views/Home/Home.vue';

export const home: RouteConfig = {
    name: 'home',
    path: '/',
    meta: {
        title: 'Home'
    },
    component: Home
};