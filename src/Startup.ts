import './scripts/hooks/ComponentHooks';

import Vue from 'vue';
import VueRouter from 'vue-router';

export default async function () {

    // Init Vue Modules
    Vue.use(VueRouter);

    // Load app related configs
    await Promise.all([
    ]);
}