import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {

    @Prop()
    Chapter: Chapter;

    @Prop()
    Page: Page;
}