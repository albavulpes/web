import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    CurrentPage: Page;

    @Prop()
    InactivePage: Page;

    GoToPrevPage() {
        this.$emit('pages:previous');
    }

    GoToNextPage() {
        this.$emit('pages:next');
    }
}
