import Vue from 'vue';
import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import {ReaderPagesStore} from '../../../../scripts/stores/reader/ReaderPagesStore';

@Component
export default class extends Vue {

    @Prop()
    Page: Page;

    GoToPrevPage() {
        this.$emit('pages:previous');
    }

    GoToNextPage() {
        this.$emit('pages:next');
    }
}
