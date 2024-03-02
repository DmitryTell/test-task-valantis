import axios from 'axios';

import { host } from './host';
import { headers } from './headers';


export const getIds = async (currentPage: number) => {
  const body = {
    action: 'get_ids',
    params: {
      offset: (currentPage - 1) * 50,
      limit: currentPage === 1 ? 49 : 50,
    },
  };

  try {
    const response = await axios.post(host, body, { headers });
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
