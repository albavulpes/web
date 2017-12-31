import './scripts/hooks/ComponentHooks';

import '@albavulpes/data-abstraction-layer';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import {mountVue} from './scripts/routing/Routes';

export default async function () {
    // Init Vue Modules
    Vue.use(VueRouter);
    Vue.use(Vuetify);

    mountVue();

    (window as any).config = config;
}