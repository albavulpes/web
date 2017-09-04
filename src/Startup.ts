import './scripts/hooks/ComponentHooks';

import '@albavulpes/data-abstraction-layer';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import routes from './scripts/routing/Routes';
import * as RoutingHooks from './scripts/routing/Hooks';

export default async function () {
    // Init Vue Modules
    Vue.use(VueRouter);
    Vue.use(Vuetify);

    await initVue();

    (window as any).config = config;
}

async function initVue(): Promise<void> {
    const router = new VueRouter({routes});

    RoutingHooks.init(router);

    $(() => {
        new Vue({router}).$mount(`#vue-entry`);
    });
}