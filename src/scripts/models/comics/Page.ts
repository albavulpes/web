import {PageImage} from './PageImage';

export interface Page {
    Id: string;
    Number: number;
    Image: PageImage;
    Description?: string;
}