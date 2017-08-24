import Vue from 'vue';
import {Component, Prop, Provide} from 'vue-property-decorator';

@Component
export default class extends Vue {
    constructor() {
        super();
        this.currentPage = this.pages[0];
    }

    @Provide()
    currentPage: string;

    pages = [
        '08.png',
        '09.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png',
        '14.png'
    ];

    selectPage(page: string) {
        this.currentPage = page;
    }

    nextPage() {
        let index = this.pages.indexOf(this.currentPage);
        index++;

        if (index >= this.pages.length)
            index = this.pages.length - 1;

        this.currentPage = this.pages[index];
    }

    prevPage() {
        let index = this.pages.indexOf(this.currentPage);
        index--;

        if (index < 0)
            index = 0;

        this.currentPage = this.pages[index];
    }
}