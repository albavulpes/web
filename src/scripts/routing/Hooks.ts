import VueRouter from 'vue-router';
import {Component} from 'vue-property-decorator';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
]);

export function init(router: VueRouter) {
    router.beforeEach((to, from, next) => {
        const pageTitle = to.meta.title;

        document.title = `${pageTitle ? `${pageTitle} - ` : ''}Alba Vulpes`;
        next();
    });
}