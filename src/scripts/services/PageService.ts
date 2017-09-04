import {data} from '@albavulpes/data-abstraction-layer';
import {Page} from '@albavulpes/data-abstraction-layer/dist/models/api/Page';
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

    async loadPage(pageId: string): Promise<void> {
        const currentPage = await data.pages.getPage(pageId);
        this.loadedPages.current = currentPage;

        const pageChapter = await data.chapters.getChapter(currentPage.ChapterId);

        const previousPageMeta = pageChapter.Pages.find(p => p.Number === currentPage.Number - 1);
        const nextPageMeta = pageChapter.Pages.find(p => p.Number === currentPage.Number + 1);

        const [previousPage, nextPage] =
            await Promise.all([
                data.pages.getPage(previousPageMeta.Id),
                data.pages.getPage(nextPageMeta.Id)
            ]);

        this.loadedPages.previous = previousPage;
        this.loadedPages.next = nextPage;
    }

    async loadNextPage(): Promise<void> {
        if (!this.loadedPages.next)
            return;

        await this.loadPage(this.loadedPages.next.Id);
    }

    async loadPreviousPage(): Promise<void> {
        if (!this.loadedPages.previous)
            return;

        await this.loadPage(this.loadedPages.previous.Id);
    }
}

BottleContainer.service('PageService', PageService as any);