import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';

export const comics: RouteConfig[] = [
    {
        name: 'comics',
        path: '/comics',
        meta: {
            title: 'Comics'
        },
        component: Comics
    },
    {
        name: 'comics.id',
        path: '/comics/:ComicId',
        props: true,
        component: Comics
    }
];