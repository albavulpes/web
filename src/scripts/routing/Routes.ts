import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import * as RoutingHooks from './Hooks';

import App from '../../components/App.vue';
import Home from '../../components/views/Home/Home.vue';
import Comics from '../../components/views/Comics/Comics.vue';

import Reader from '../../components/views/Reader/Reader.vue';
import ReaderPages from '../../components/views/Reader/ReaderPages/ReaderPages.vue';

const routes: RouteConfig[] = [
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
        component: Reader,
        children: [
            {
                name: 'reader.page',
                path: 'page/:pageId'
            }
        ]
    }
];

export function mountVue() {
    const router = new VueRouter({
        routes,
        mode: 'history',
        scrollBehavior: () => ({x: 0, y: 0})
    });

    RoutingHooks.init(router);

    // Mount vue
    new Vue({
        router,
        el: `#vue-entry`,
        render: h => h(App)
    });
}