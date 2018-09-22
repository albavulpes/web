import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Comic} from '@albavulpes/data-abstraction-layer/dist/models/api/Comic';

@Component
export default class extends Vue {

    @Prop()
    ComicId: string;

    Comic: Comic = null;

    async created() {
    }
}