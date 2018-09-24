import {Model} from './base/Model';
import {PageImage} from './PageImage';

export interface Comic extends Model {
    Title: string;
    Author: string;
    Description: string;
    ReleaseDate: string;
    CoverImage: PageImage;
    ArcsCount: number;
}