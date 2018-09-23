import axios from 'axios';
import {Comic} from '../models/Comic';

export namespace comics {
    export async function getAll(): Promise<Comic[]> {
        const response = await axios.get<Comic[]>('/comics');

        return response.data;
    }

    export async function get(id: string): Promise<Comic> {
        const response = await axios.get<Comic>(`/comics/${id}`);

        return response.data;
    }
}