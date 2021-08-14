import axios from './index';
import { backendUrl } from '../global';

const webApi = `${backendUrl}/categories`;

export const getCategoriesRevwnues = () => axios.get(`${webApi}/revenues`);