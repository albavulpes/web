declare let __webpack_public_path__: string;

// Vue Material
declare module 'vue-material' {
    import {PluginObject} from 'vue';
    export default null as PluginObject<any>;
}

// Vue files fix
declare module '*.vue' {
    import Vue from 'vue';
    export default class extends Vue {
    }
}