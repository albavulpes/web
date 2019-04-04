import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'

import BootstrapVue from 'bootstrap-vue'
import Vue2Filters from 'vue2-filters';
import VueMoment from 'vue-moment';

// Init Vue Modules
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMeta);

// Plugins
Vue.use(BootstrapVue);
Vue.use(Vue2Filters);
Vue.use(VueMoment);