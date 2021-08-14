import axios from './index';
import { backendUrl } from '../global';

const webApi = `${backendUrl}/products`;

export const getProducts = (id?: number) => id ? axios.get(`${webApi}/${id}`) : axios.get(`${webApi}`);