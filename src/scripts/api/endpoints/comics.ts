import axios from 'axios';
import {Comic} from '../models/Comic';

export namespace comics {
    export async function getAll() {
        return await axios.get<Comic[]>('/comics');
    }

    export async function get(id: string) {
        return await axios.get<Comic>(`/comics/${id}`);
    }
}