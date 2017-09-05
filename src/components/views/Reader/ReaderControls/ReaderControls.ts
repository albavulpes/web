import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Inject} from '../../../../scripts/decorators/Bottle';

import {PageService} from '../../../../scripts/services/PageService';
import {Page} from '@albavulpes/data-abstraction-layer/dist/models/api/Page';

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

    async nextPage(): Promise<void> {
        this.$router.push({
            params: {
                pageId: this.$route.params.pageId + 1
            }
        });

        await this.PageService.loadNextPage();
    }

    async prevPage(): Promise<void> {
        await this.PageService.loadPreviousPage();
    }

    goFullscreen(): void {

    }
}