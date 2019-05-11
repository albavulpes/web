import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

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
    CurrentPage: Page = null;
    InactivePage: Page = null;

    async created() {
        this.Chapter = await this.HttpService.api.chapters.get(this.ChapterId);
        this.CurrentPage = await this.HttpService.api.pages.getByPageNumber(this.ChapterId, this.PageNumber);
    }

    async OnPrevPage() {
        this.CurrentPage = await this.HttpService.api.pages.getPreviousPage(this.CurrentPage.Id);
    }

    async OnNextPage() {
        this.CurrentPage = await this.HttpService.api.pages.getNextPage(this.CurrentPage.Id);
    }

    @Watch('CurrentPage', {immediate: true})
    async WatchCurrentPage() {
        await this.GetInactivePage();
    }

    async GetInactivePage() {
        this.InactivePage = await this.HttpService.api.pages.getNextPage(this.CurrentPage.Id);
    }
}