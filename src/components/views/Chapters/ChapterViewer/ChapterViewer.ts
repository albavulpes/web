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
    ChapterId: string;

    @Require()
    HttpService: HttpService;

    Chapter: Chapter = null;
    Pages: Page[] = null;

    async created() {
        this.Chapter = await this.HttpService.api.chapters.get(this.ChapterId);
        this.Pages = await this.HttpService.api.pages.getAll(this.ChapterId);
    }
}