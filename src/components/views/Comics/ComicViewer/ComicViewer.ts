import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Comic} from '../../../../scripts/api/models/Comic';
import {Arc} from '../../../../scripts/api/models/Arc';
import {api} from '../../../../scripts/api/api';

import MediaCard from '../../../shared/MediaCard/MediaCard.vue';

@Component({
    components: {
        MediaCard
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    Comic: Comic = null;
    Arcs: Arc[] = null;

    async created() {
        this.Comic = await api.comics.get(this.ComicId);

        this.Arcs = await api.arcs.getAllForComic(this.ComicId);
    }
}