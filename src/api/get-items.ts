import { host } from './host';
import { headers } from './headers';


export const getItems = async (ids: string[]) => {
  const response = await fetch(host, {
    method: 'POST',
    body: JSON.stringify({
      action: 'get_items',
      params: { ids },
    }),
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

  return data.result;
};
