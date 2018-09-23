import axios from 'axios';

axios.defaults.baseURL = AppConfig.ApiPath;
// axios.defaults.withCredentials = true;

import {comics} from './endpoints/comics';

export const api = {
    comics
};