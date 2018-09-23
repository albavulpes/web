import {Model, ModelIdentity} from './base/Model';
import {PageImage} from './PageImage';

export interface Page extends PageCompact {
    Image: PageImage;
    Description: string;
}

export interface PageCompact extends Model {
    Number: number;
    ChapterId: ModelIdentity;
}