import { host } from './host';
import { headers } from './headers';


interface IParams {
  offset?: number;
  limit?: number;
}

interface IBody {
  action: string;
  params?: IParams;
}

export const getIds = async (currentPage: number, allIds: boolean) => {
  const body: IBody = {
    action: 'get_ids',
  };

  const params: IParams = {};

  if (!allIds) {
    params.offset = (currentPage - 1) * 50;
    params.limit = currentPage === 1 ? 49 : 50;
    body.params = params;
  }

  const response = await fetch(host, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });

  if (response.status === 401) {
    throw new Error('Ошибка авторизации');
  }

  if (response.status === 400) {
    throw new Error('Переданы неверные данные');
  }

  if (!response.ok) {
    throw new Error('Ошибка загрузки');
  }

  const data = await response.json();

  return [...new Set(data.result)];
};
