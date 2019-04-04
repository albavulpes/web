import './scripts/startup/VueModules';
import './scripts/startup/AppModules';

import {mount} from './scripts/routing/Routes';

export default async function () {
    mount();

    (window as any).config = AppConfig;
}