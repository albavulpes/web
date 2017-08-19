import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {getDocumentHtml} from '../../../scripts/engine/DocumentLoader';

@Component
export default class extends Vue {
    documentHtml: string = null;

    async mounted() {
        this.documentHtml = await getDocumentHtml(this.$route.path);
    }
}