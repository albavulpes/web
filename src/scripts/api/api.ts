import axios from 'axios';

axios.defaults.baseURL = AppConfig.ApiPath;
// axios.defaults.withCredentials = true;

import {comics} from './endpoints/comics';
import {arcs} from './endpoints/arcs';

export const api = {
    comics,
    arcs
};