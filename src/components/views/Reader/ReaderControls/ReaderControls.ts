import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Inject} from '../../../../scripts/decorators/Bottle';

import {PageService} from '../../../../scripts/services/PageService';
import {Page} from '@albavulpes/data-abstraction-layer/dist/models/Page';

@Component
export default class extends Vue {
    @Inject()
    PageService: PageService;

    get currentPage(): Page {
        return this.PageService.loadedPages.current;
    }

    firstPage(): void {

    }

    lastPage(): void {

    }

    nextPage(): void {
        this.PageService.loadNextPage();
    }

    prevPage(): void {
        this.PageService.loadPreviousPage();
    }

    goFullscreen(): void {

    }
}