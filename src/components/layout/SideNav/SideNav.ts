import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {ManifestEntry, Section} from '../../../scripts/models/Manifest';
import {getManifest} from '../../../scripts/config/Manifest';

import CollapsibleMenu from './CollapsibleMenu/CollapsibleMenu.vue';

@Component({
    components: {
        CollapsibleMenu
    }
})
export default class extends Vue {
    manifest: ManifestEntry = null;

    async mounted() {
        const manifest = await getManifest();

        this.manifest = manifest;

        (this.$root as any).mainSideNav = this.$refs.mainSideNav;
    }
}