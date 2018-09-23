import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Comic} from '../../../../scripts/api/models/Comic';
import {Arc} from '../../../../scripts/api/models/Arc';
import {ComicsService} from '../../../../scripts/services/ComicsService';

@Component
export default class extends Vue {

    @Prop()
    ComicId: string;

    Comic: Comic = null;
    Arcs: Arc[] = null;

    async created() {
        this.Comic = await ComicsService.getComic(this.ComicId);
    }
}