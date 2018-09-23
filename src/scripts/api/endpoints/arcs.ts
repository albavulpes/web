import axios from 'axios';
import {Arc} from '../models/Arc';

export namespace arcs {
    export async function getAllForComic(comicId: string): Promise<Arc[]> {
        const response = await axios.get<Arc[]>('/arcs', {params: {comicId}});

        return response.data;
    }

    export async function get(id: string): Promise<Arc> {
        const response = await axios.get<Arc>(`/arcs/${id}`);

        return response.data;
    }
}