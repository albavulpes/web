import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Comic} from '../../../../scripts/api/models/Comic';

import MediaCard from '../../../shared/MediaCard/MediaCard.vue';

@Component({
    components: {
        MediaCard
    }
})
export default class extends Vue {
    @Prop()
    Comic: Comic;

    get NumberOfArcs() {
        return this.Comic && this.Comic.Arcs && this.Comic.Arcs.length;
    }
}