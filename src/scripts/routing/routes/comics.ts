import {RouteConfig} from 'vue-router';

import Comics from '../../../components/views/Comics/Comics.vue';
import ComicViewer from '../../../components/views/Comics/ComicViewer/ComicViewer.vue';

export default [
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
        component: ComicViewer
    }
] as RouteConfig[];