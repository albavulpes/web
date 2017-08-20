import VueRouter from 'vue-router';

export function init(router: VueRouter) {
    router.beforeEach((to, from, next) => {
        const pageTitle = to.meta.title;

        document.title = `${pageTitle ? `${pageTitle} - ` : ''}Project Strokes`;
        next();
    });
}