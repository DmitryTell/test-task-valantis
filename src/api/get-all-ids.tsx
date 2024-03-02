import axios from 'axios';

import { host } from './host';
import { headers } from './headers';


export const getAllIds = async () => {
  try {
    const response = await axios.post(host, { action: 'get_ids' }, { headers });
    const data = await response.data;

    return [...new Set(data.result)];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        throw new Error('Ошибка авторизации');
      } else if (error.response && error.response.status === 400) {
        throw new Error('Ошибка: заданы неверные параметры');
      } else {
        throw new Error('Ошибка загрузки данных');
      }
    } else {
      throw new Error('Ошибка загрузки данных');
    }
  }
};
