import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Inject} from '../../../../scripts/decorators/Bottle';

import {PageService} from '../../../../scripts/services/PageService';

@Component
export default class extends Vue {
    @Inject()
    PageService: PageService;
}