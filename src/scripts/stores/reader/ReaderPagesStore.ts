import {Action, State, VuexStore} from '@albavulpes/ui-core/dist/framework/decorators/Store';
import {Service} from 'typedi';
import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';

@Service()
export class ReaderPagesStore extends VuexStore {

    @Require()
    HttpService: HttpService;

    @State()
    CurrentPage: Page;

    @State()
    CurrentChapter: Chapter;

    @State()
    InactivePage: Page;

    @Action()
    async Initialize(params: {ChapterId: string, PageNumber: number}) {
        this.CurrentChapter = await this.HttpService.api.chapters.get(params.ChapterId);
        this.CurrentPage = await this.HttpService.api.pages.getByPageNumber(params.ChapterId, params.PageNumber);

        // await this.GetInactivePage();
    }

    @Action()
    async GetPrevPage() {
        this.CurrentPage = await this.HttpService.api.pages.getPreviousPage(this.CurrentPage.Id);

        await this.GetInactivePage();
    }

    @Action()
    async GetNextPage() {
        this.CurrentPage = await this.HttpService.api.pages.getNextPage(this.CurrentPage.Id);

        await this.GetInactivePage();
    }

    @Action()
    async GetInactivePage() {
        this.InactivePage = await this.HttpService.api.pages.getNextPage(this.CurrentPage.Id);
    }
}

// export const ReaderPagesStore = new (class extends Store<CartStoreState> {
//     constructor() {
//         super({
//             state: {
//                 previousPage: null,
//                 currentPage: null,
//                 nextPage: null
//             },
//             actions: {
//                 async fetchPages(context) {
//                     // TODO: Think about initing the store
//
//                     context.state.currentPage = {
//                         Number: 1
//                     } as any;
//
//                     context.state.nextPage = {
//                         Number: 2
//                     } as any;
//                 },
//                 async goToPrevious(context) {
//                     if (!context.state.previousPage)
//                         return;
//
//                     // TODO: Make API call for next page here
//                     const previousPage = {
//                         Number: context.state.previousPage.PageNumber - 1
//                     } as any;
//
//                     this.commit('goToPrevious', previousPage);
//                 },
//                 async goToNext(context) {
//                     if (!context.state.nextPage)
//                         return;
//
//                     // TODO: Make API call for next page here
//                     const nextPage = {
//                         Number: context.state.nextPage.PageNumber + 1
//                     } as any;
//
//                     this.commit('goToNext', nextPage);
//                 }
//             },
//             mutations: {
//                 goToPrevious(state, previousPage: Page) {
//                     state.nextPage = state.currentPage;
//                     state.currentPage = state.previousPage;
//                     state.previousPage = previousPage;
//                 },
//                 goToNext(state, nextPage: Page) {
//                     state.previousPage = state.currentPage;
//                     state.currentPage = state.nextPage;
//                     state.nextPage = nextPage;
//                 }
//             }
//         });
//
//         this.fetchPages();
//     }
//
//     /* Getters */
//     get previousPage() {
//         return this.state.previousPage;
//     }
//
//     get currentPage() {
//         return this.state.currentPage;
//     }
//
//     get nextPage() {
//         return this.state.nextPage;
//     }
//
//     /* Actions */
//     async fetchPages() {
//         await this.dispatch('fetchPages');
//     }
//
//     async goToPrevious() {
//         await this.dispatch('goToPrevious');
//     }
//
//     async goToNext() {
//         await this.dispatch('goToNext');
//     }
// })();
