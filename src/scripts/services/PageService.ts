import {Page} from '@albavulpes/data-abstraction-layer/dist/models/Page';
import {BottleContainer} from '../bottle/BottleContainer';

export class PageService {
    loadedPages: {
        previous: Page,
        current: Page,
        next: Page
    };

    loadPage(pageId: string): void {

    }

    loadNextPage(): void {

    }

    loadPreviousPage(): void {

    }
}

BottleContainer.service('PageService', PageService as any);