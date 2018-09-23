import {Model, ModelIdentity} from './base/Model';
import {Chapter} from './Chapter';

export interface Arc extends Model {
    Title: string;
    Number: number;
    Chapters: Chapter[];

    ComicId: ModelIdentity;
}