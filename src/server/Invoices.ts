import axios from './index';
import { backendUrl } from '../global';

const webApi = `${backendUrl}/invoices`;

export const getInvoices = (id?: number) => id ? axios.get(`${webApi}/${id}`) : axios.get(`${webApi}`);
