import Vue from 'vue';
import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import {Page} from '../../../../scripts/models/comics/Page';

@Component
export default class extends Vue {
    @Prop()
    pages: Page[];

    @Prop()
    currentPage: Page;

    selectPage(page: Page) {

    }
}