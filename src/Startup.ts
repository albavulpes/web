import './scripts/hooks/ComponentHooks';

import '@albavulpes/data-abstraction-layer';

import Vue from 'vue';
import VueRouter from 'vue-router';

import {mountVue} from './scripts/routing/Routes';

export default async function () {
    // Init Vue Modules
    Vue.use(VueRouter);

    mountVue();

    (window as any).config = config;
}