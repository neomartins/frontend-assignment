import axios from './index';
import { backendUrl } from '../src/global';

export const getCustomers = () => axios.get(`${backendUrl}/customers-revenues`);
