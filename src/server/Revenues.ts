import axios from './index';
import { backendUrl } from '../global';


const webApi = `${backendUrl}/invoices`;

export const getRevenues = (period: string) => axios.get(`${webApi}/${period}`);