import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import MediaCard from '../../../shared/MediaCard/MediaCard.vue';

@Component({
    components: {
        MediaCard
    }
})
export default class extends Vue {

    @Prop()
    ComicId: string;

    @Require()
    HttpService: HttpService;

    Comic: Comic = null;

    async created() {
        this.Comic = await this.HttpService.api.comics.get(this.ComicId);
    }
}