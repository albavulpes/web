import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import TopNav from './layout/TopNav/TopNav.vue';
import SideNav from './layout/SideNav/SideNav.vue';

@Component({
    components: {
        TopNav,
        SideNav
    }
})
export default class extends Vue {
}