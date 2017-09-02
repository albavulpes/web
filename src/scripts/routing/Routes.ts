import {RouteConfig} from 'vue-router';

import App from '../../components/App.vue';
import Home from '../../components/views/Home/Home.vue';
import Comics from '../../components/views/Comics/Comics.vue';
import Reader from '../../components/views/Reader/Reader.vue';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: App,
        children: [
            {
                name: 'home',
                path: '/',
                meta: {
                    title: 'Home'
                },
                component: Home
            },
            {
                name: 'comic',
                path: '/comic',
                meta: {
                    title: 'Comics'
                },
                component: Comics
            },
            {
                name: 'reader',
                path: '/reader',
                meta: {
                    title: 'Reader'
                },
                component: Reader
            }
        ]
    }
];

export default routes;