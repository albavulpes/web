import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class extends Vue {

    @Prop()
    Chapter: Chapter;

    @Prop()
    Page: Page;

    GoToPrevPage() {
        this.$emit('controls:previous');
    }

    GoToNextPage() {
        this.$emit('controls:next');
    }
}