import {Model, ModelIdentity} from './base/Model';
import {PageCompact} from './Page';

export interface Chapter extends Model {
    Number: number;
    Pages: PageCompact[];

    ArcId: ModelIdentity;
}