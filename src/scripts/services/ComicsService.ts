import {api} from '../api/api';
import {Comic} from '../api/models/Comic';

export namespace ComicsService {
    export async function getAllComics(): Promise<Comic[]> {
        const response = await api.comics.getAll();

        return response.data;
    }

    export async function getComic(comicId: string): Promise<Comic> {
        const response = await api.comics.get(comicId);

        return response.data;
    }
}