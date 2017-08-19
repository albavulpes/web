import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import TopNav from './layout/TopNav/TopNav.vue';

@Component({
    components: {
        TopNav
    }
})
export default class extends Vue {
}