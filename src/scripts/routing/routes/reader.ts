import Reader from '../../../components/views/Reader/Reader.vue';
import {RouteConfig} from 'vue-router';

export default [
    {
        name: 'reader',
        path: '/reader/:ChapterId/page/:PageNumber',
        meta: {
            title: 'Reader'
        },
        component: Reader,
        props: true
    }
] as RouteConfig[];