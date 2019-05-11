import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Require} from '@albavulpes/ui-core/dist/di';
import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {

    @Require()
    ReaderPagesStore: ReaderPagesStore;

    get CurrentPage() {
        return this.ReaderPagesStore.CurrentPage;
    }

    get InactivePage() {
        return this.ReaderPagesStore.InactivePage;
    }

    async GoToPrevPage() {
        await this.ReaderPagesStore.GetPrevPage();
    }

    async GoToNextPage() {
        await this.ReaderPagesStore.GetNextPage();
    }
}
