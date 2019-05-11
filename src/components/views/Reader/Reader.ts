import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {Require} from '@albavulpes/ui-core/dist/di';
import {HttpService} from '@albavulpes/ui-core/dist/services/app/HttpService';
import {ReaderPagesStore} from '../../../scripts/stores/reader/ReaderPagesStore';

import ReaderControls from './ReaderControls/ReaderControls.vue';
import ReaderPages from './ReaderPages/ReaderPages.vue';

@Component({
    components: {
        ReaderControls,
        ReaderPages
    }
})
export default class extends Vue {

    @Prop({required: true})
    ChapterId: string;

    @Prop({required: true})
    PageNumber: number;

    @Require()
    HttpService: HttpService;

    @Require()
    ReaderPagesStore: ReaderPagesStore;

    async created() {
        console.log(this.ChapterId, this.PageNumber);

        await this.ReaderPagesStore.Initialize({
            ChapterId: this.ChapterId,
            PageNumber: this.PageNumber
        });
    }
}