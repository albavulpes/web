import Vue, {Component} from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import * as RoutingHooks from './Hooks';

import App from '../../components/App.vue';

import home from './routes/home';
import comics from './routes/comics';
import chapters from './routes/chapters';
import reader from './routes/reader';

const routes: RouteConfig[] = [
    ...home,
    ...comics,
    ...chapters
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

    return router;
}