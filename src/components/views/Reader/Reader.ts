import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import ReaderControls from './ReaderControls/ReaderControls.vue';
import ReaderPages from './ReaderPages/ReaderPages.vue';

@Component({
    components: {
        ReaderControls,
        ReaderPages
    }
})
export default class extends Vue {
}