import {Model} from './base/Model';
import {Arc} from './Arc';
import {PageImage} from './PageImage';

export interface Comic extends Model {
    Title: string;
    Author: string;
    ReleaseDate: string;
    CoverImage: PageImage;
    Arcs: Arc[];
}