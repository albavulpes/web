import {Page} from '@albavulpes/data-abstraction-layer/dist/models/Page';
import {BottleContainer} from '../bottle/BottleContainer';

export class PageService {
    constructor() {
        this.loadedPages = {
            previous: null,
            current: null,
            next: null
        };
    }

    loadedPages: {
        previous: Page,
        current: Page,
        next: Page
    };

    loadPage(pageId: string): void {

    }

    loadNextPage(): void {
        console.log('Next Page');
    }

    loadPreviousPage(): void {
        console.log('Previous Page');
    }
}

BottleContainer.service('PageService', PageService as any);