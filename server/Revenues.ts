import axios from './index';
import { backendUrl } from '../src/global';

export const getMonthlyRevenues = () => axios.get(`${backendUrl}/monthly-revenues`);
export const getWeeklyRevenues = () => axios.get(`${backendUrl}/weekly-revenues`);