import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import Vue2Filters from 'vue2-filters';
import VueMoment from 'vue-moment';

// Init Vue Modules
Vue.use(Vuex);
Vue.use(VueRouter);

// Plugins
Vue.use(Vue2Filters);
Vue.use(VueMoment);