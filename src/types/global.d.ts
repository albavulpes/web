declare let __webpack_public_path__: string;

// Vue files fix
declare module '*.vue' {
    import Vue from 'vue';
    import 'vue-router';
    export default class extends Vue {
    }
}