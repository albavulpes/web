import {Model, ModelIdentity} from './base/Model';

export interface Arc extends Model {
    Title: string;
    Number: number;

    ComicId: ModelIdentity;
}