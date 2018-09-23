import './scripts/startup/VueModules';

import {mount} from './scripts/routing/Routes';

export default async function () {
    mount();

    (window as any).config = AppConfig;
}