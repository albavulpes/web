import Reader from '../../../components/views/Reader/Reader.vue';
import {RouteConfig} from 'vue-router';

export default [
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
] as RouteConfig[];