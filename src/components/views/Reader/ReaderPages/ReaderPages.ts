import Vue from 'vue';
import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import {Page} from '@albavulpes/data-abstraction-layer/dist/models/api/Page';

@Component
export default class extends Vue {
    async mounted() {
        this.$watch(() => this.pageId,
            () => {
                this.loadPage(this.pageId);
            }, {
                immediate: true
            });
    }

    get pageId() {
        return this.$route.params.pageId;
    }

    @Prop()
    previousPage: Page;

    @Prop()
    currentPage: Page;

    @Prop()
    nextPage: Page;

    loadPage(pageId: string) {
        console.log(pageId);
    }
}
