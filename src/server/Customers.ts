import axios from './index';
import { backendUrl } from '../global';

const webApi = `${backendUrl}/customers`;

export const getCustomers = (id?: number) => id ? axios.get(`${webApi}/${id}`) : axios.get(`${webApi}`);
export const getCustomersRevwnues = () => axios.get(`${webApi}/revenues`);
