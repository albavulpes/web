import './scripts/startup/VueModules';

import {mountVue} from './scripts/routing/Routes';

export default async function () {
    mountVue();

    (window as any).config = config;
}