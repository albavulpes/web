import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {ManifestEntry} from '../../../../scripts/models/Manifest';

@Component({
    name: 'CollapsibleMenu'
})
export default class extends Vue {
    @Prop({type: Object})
    entry: ManifestEntry;

    @Prop()
    isOpen: boolean;

    @Prop({default: true})
    showTitle: boolean;

    isMenuOpen = this.isOpen;

    toggleChild() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}