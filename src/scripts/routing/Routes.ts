import Vue, {Component} from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import * as RoutingHooks from './Hooks';

import App from '../../components/App.vue';

import Reader from '../../components/views/Reader/Reader.vue';
import ReaderPages from '../../components/views/Reader/ReaderPages/ReaderPages.vue';

import {home} from './routes/home';
import {comics} from './routes/comics';

const routes: RouteConfig[] = [
    home,
    ...comics,
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

export function mount(): void {
    const router = createRouter();

    // Mount router to page
    new Vue({
        el: `#vue-entry`,
        router,
        render: h => h(App)
    });
}

function createRouter() {
    // Create router
    const router = new VueRouter({
        routes,
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            // Simulate anchor scroll
            if (to.hash && document.getElementById(to.hash.substring(1))) {
                return {
                    selector: to.hash
                };
            }

            // Otherwise go to top of page
            return {x: 0, y: 0};
        }
    });

    // Register hooks
    RoutingHooks.init(router);

    return router;
}