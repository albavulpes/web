import Vue from 'vue';
import {Component, Provide, Watch} from 'vue-property-decorator';

import ReaderPages from './ReaderPages/ReaderPages.vue';
import ReaderGuide from './ReaderGuide/ReaderGuide.vue';
import {Page} from '../../../scripts/models/comics/Page';

@Component({
    components: {
        ReaderPages,
        ReaderGuide
    }
})
export default class extends Vue {
    constructor() {
        super();

        this.currentPages = {
            prev: null,
            main: null,
            next: null
        };
        this.atIndex = 0;
    }

    @Provide()
    atIndex: number;

    @Provide()
    currentPages: {
        prev: Page,
        main: Page,
        next: Page
    };

    @Watch('atIndex', {immediate: true})
    onIndexChange(index: number) {
        this.currentPages.prev = index > 0 ? this.pages[index - 1] : null;
        this.currentPages.main = this.pages[index];
        this.currentPages.next = index < this.pages.length - 1 ? this.pages[index + 1] : null;
    }

    // TODO: This should be API data
    pages: Page[] = getPages();

    selectPage(page: Page) {
        this.atIndex = this.pages.indexOf(page);
    }

    nextPage() {
        let index = this.atIndex;
        index++;

        if (index >= this.pages.length)
            index = this.pages.length - 1;

        this.atIndex = index;
    }

    prevPage() {
        let index = this.atIndex;
        index--;

        if (index < 0)
            index = 0;

        this.atIndex = index;
    }
}

function getPages(): Page[] {
    return [
        '08.png',
        '09.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png',
        '14.png'
    ]
        .map(x => `/assets/images/comic/${x}`)
        .map((x, i) => {
            return {
                Id: x,
                Number: i + 1,
                Image: {
                    Main: x
                }
            };
        });
}
