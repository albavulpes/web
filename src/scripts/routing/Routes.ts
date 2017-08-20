import {RouteConfig} from 'vue-router';

import App from '../../components/App.vue';
import Document from '../../components/views/Document/Document.vue';

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