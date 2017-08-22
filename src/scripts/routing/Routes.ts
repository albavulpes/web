import {RouteConfig} from 'vue-router';

import App from '../../components/App.vue';
import Document from '../../components/views/Comic/Comic.vue';

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
                component: Document
            }
        ]
    }
];

export default routes;