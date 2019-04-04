import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';


import ComicCard from './ComicCard/ComicCard.vue';

@Component({
    components: {
        ComicCard
    }
})
export default class extends Vue {

    @Require()
    HttpService: HttpService;

    Comics: Comic[] = null;

    async created() {
        this.Comics = await this.HttpService.api.comics.getAll();
    }
}