import axios from 'axios';

import { host } from './host';
import { headers } from './headers';


export const getItems = async (ids: string[]) => {
  const body = {
    action: 'get_items',
    params: { ids },
  };

  try {
    const response = await axios.post(host, body, { headers });
    const data = await response.data;

    return data.result;
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
