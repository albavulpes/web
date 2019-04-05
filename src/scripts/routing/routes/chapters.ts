import {RouteConfig} from 'vue-router';

import ChapterViewer from '../../../components/views/Chapters/ChapterViewer/ChapterViewer.vue';

export default [
    {
        name: 'chapters.id',
        path: '/chapters/:ChapterId',
        props: true,
        component: ChapterViewer
    }
] as RouteConfig[];