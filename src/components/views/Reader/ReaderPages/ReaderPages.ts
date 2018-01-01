import Vue from 'vue';
import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {
    get pageId() {
        return this.$route.params.pageId;
    }

    get previousPage() {
        return ReaderPagesStore.previousPage;
    }

    get currentPage() {
        return ReaderPagesStore.currentPage;
    }

    get nextPage() {
        return ReaderPagesStore.nextPage;
    }

    async goToPreviousPage() {
        await ReaderPagesStore.goToPrevious();
    }

    async goToNextPage() {
        await ReaderPagesStore.goToNext();
    }
}
