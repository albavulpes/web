import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Comic} from '@albavulpes/data-abstraction-layer/dist/models/api/Comic';

@Component
export default class extends Vue {
    @Prop()
    Comic: Comic;

    get NumberOfArcs() {
        return this.Comic && this.Comic.Arcs && this.Comic.Arcs.length;
    }
}