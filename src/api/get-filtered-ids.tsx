import axios from 'axios';

import { host } from './host';
import { headers } from './headers';
import { filterIds } from './filter-ids';


interface IParams {
  product?: string;
  price?: number;
  brand?: string;
}

interface IBody {
  action: string;
  params?: IParams;
}

export const getFilteredIds = async (name: string, price: number, brand: string, currentPage = 0) => {
  const body: IBody = {
    action: 'filter',
  };
  const params: IParams = {};

  if (name) {
    params.product = name;
  }

  if (price) {
    params.price = price;
  }

  if (brand) {
    params.brand = brand;
  }

  if (name || price || brand) {
    body.params = params;
  }

  try {
    const response = await axios.post(host, body, { headers });
    const data = await response.data;

    if (currentPage > 0) {
      const result = filterIds(currentPage, data.result);

      return [...new Set(result)];
    }

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
