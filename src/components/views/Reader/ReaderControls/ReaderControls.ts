import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {
    get currentPage() {
        return ReaderPagesStore.currentPage;
    }

    async goToPreviousPage() {
        await ReaderPagesStore.goToPrevious();
    }

    async goToNextPage() {
        await ReaderPagesStore.goToNext();
    }
}