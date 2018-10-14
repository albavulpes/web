import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import TopNav from './layout/TopNav/TopNav.vue';
import FooterNav from './layout/FooterNav/FooterNav.vue';

@Component({
    components: {
        TopNav,
        FooterNav
    }
})
export default class extends Vue {
}