import './scripts/hooks/ComponentHooks';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import routes from './scripts/routing/Routes';

export default async function () {
    // Init Vue Modules
    Vue.use(VueRouter);
    Vue.use(Vuetify);

    await initVue();
}

async function initVue(): Promise<void> {
    const router = new VueRouter({routes});

    $(() => {
        new Vue({router}).$mount(`#vue-entry`);
    });
}