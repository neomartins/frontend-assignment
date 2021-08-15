import axios from './index';
import { backendUrl } from '../global';

const webApi = `${backendUrl}/categories`;

export const getCategoriesRevenues = () => axios.get(`${webApi}/revenues`);