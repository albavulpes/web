import Vue, {Component} from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import * as RoutingHooks from './Hooks';

import App from '../../components/App.vue';
import Home from '../../components/views/Home/Home.vue';
import Comics from '../../components/views/Comics/Comics.vue';

import Reader from '../../components/views/Reader/Reader.vue';
import ReaderPages from '../../components/views/Reader/ReaderPages/ReaderPages.vue';

const APP_CONTAINER_ID = 'app-container';

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

export function mount(): void {
    $(`#vue-entry`)
        .empty()
        .html(`
            <div id="${APP_CONTAINER_ID}">
                <router-view></router-view>
            </div>
        `);

    const router = createRouter();

    // Mount router to page
    new Vue({
        el: `#${APP_CONTAINER_ID}`,
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