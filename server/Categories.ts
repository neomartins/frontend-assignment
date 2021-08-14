import axios from './index';
import { backendUrl } from '../src/global';

export const getCategories = () => axios.get(`${backendUrl}/categories-revenues?_sort=total_revenue&_order=desc`);