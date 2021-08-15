import axios from './index';
import { backendUrl } from '../global';


const webApi = `${backendUrl}/revenues`;

export const getRevenues = (period: string) => axios.get(`${webApi}/${period}`);