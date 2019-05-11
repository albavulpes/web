import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {

    @Require()
    ReaderPagesStore: ReaderPagesStore;

    get CurrentChapter() {
        return this.ReaderPagesStore.CurrentChapter;
    }

    get CurrentPage() {
        return this.ReaderPagesStore.CurrentPage;
    }

    async GoToPrevPage() {
        await this.ReaderPagesStore.GetPrevPage();
    }

    async GoToNextPage() {
        await this.ReaderPagesStore.GetNextPage();
    }
}