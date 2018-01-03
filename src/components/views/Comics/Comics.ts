import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Comic} from '@albavulpes/data-abstraction-layer/dist/models/api/Comic';

import ComicPanel from './ComicPanel/ComicPanel.vue';

@Component({
    components: {
        ComicPanel
    }
})
export default class extends Vue {

    // TODO: Get comics from the API

    comics: Partial<Comic>[] = [
        {
            Id: 'a7a54ce2',
            Title: 'Awesome Comic',
            CoverImage: {
                Main: `http://via.placeholder.com/1200x1600?text=Awesome+Comic`,
                Thumbnail: `http://via.placeholder.com/300x400?text=Awesome+Comic`,
            },
            Description: 'Imagine was you removal raising gravity. Unsatiable understood or expression dissimilar so sufficient. Its party every heard and event gay. Advice he indeed things adieus in number so uneasy. To many four fact in he fail. My hung it quit next do of. It fifteen charmed by private savings it mr. Favourable cultivated alteration entreaties yet met sympathize. Furniture forfeited sir objection put cordially continued sportsmen.'
        },
        {
            Id: 'a7a550ca',
            Title: 'Awesome Comic II: Electric Boogaloo',
            CoverImage: {
                Main: `http://via.placeholder.com/1200x1600?text=Awesome+Comic+II:+Electric+Boogaloo`,
                Thumbnail: `http://via.placeholder.com/300x400?text=Awesome+Comic+II:+Electric+Boogaloo`,
            },
            Description: 'Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient.'
        }
    ]
}