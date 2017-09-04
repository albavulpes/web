import Vue from 'vue';
import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import {Page} from '@albavulpes/data-abstraction-layer/dist/models/api/Page';


@Component
export default class extends Vue {
    @Prop()
    previousPage: Page;

    @Prop()
    currentPage: Page;

    @Prop()
    nextPage: Page;
}
