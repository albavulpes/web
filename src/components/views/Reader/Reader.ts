import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

import ReaderControls from './ReaderControls/ReaderControls.vue';
import ReaderPages from './ReaderPages/ReaderPages.vue';

@Component({
    components: {
        ReaderControls,
        ReaderPages
    }
})
export default class extends Vue {

    @Prop()
    ChapterId: string;

    @Prop()
    PageNumber: number;

    @Require()
    HttpService: HttpService;

    Chapter: Chapter = null;
    Page: Page = null;

    async created() {
        this.Chapter = await this.HttpService.api.chapters.get(this.ChapterId);
        this.Page = await this.HttpService.api.pages.getByPageNumber(this.ChapterId, this.PageNumber);
    }
}