import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Comic} from '../../../scripts/api/models/Comic';
import {api} from '../../../scripts/api/api';

import ComicCard from './ComicCard/ComicCard.vue';

@Component({
    components: {
        ComicCard
    }
})
export default class extends Vue {

    Comics: Comic[] = null;

    async created() {
        this.Comics = await api.comics.getAll();
    }
}