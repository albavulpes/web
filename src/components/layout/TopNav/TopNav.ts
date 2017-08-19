import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class extends Vue {

    toggleSideNav() {
        (this.$root as any).mainSideNav.toggle();
    }
}