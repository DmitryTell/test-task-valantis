import { useState, useEffect } from 'react';

import { Layout } from '@layout';
import {
  Title, Filter, ItemList, PagNav, ErrorBlock
} from '@components/';
import { IItem } from '@interface/';

import {
  getIds, getFilteredIds, getItems
} from '../api';


export const Main = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [items, setItems] = useState<IItem[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const handleGetAllIds = async () => {
      try {
        let allIds;
        let resultIds;

        if (!name && !price && !brand) {
          allIds = await getIds();
          resultIds = await getIds(currentPage);
        } else {
          allIds = await getFilteredIds(name, Number(price), brand);
          resultIds = await getFilteredIds(name, Number(price), brand, currentPage);
        }

        const resultItems = await getItems(resultIds as string[]);

        setIsLoading(false);

        if (resultItems?.length) {
          setLastPage(Math.ceil(allIds.length / 50));
          setItems(resultItems);
        } else {
          setIsError('Ничего не найдено');
          setCurrentPage(1);
        }
      } catch (error) {
        if (error instanceof Error) {
          setIsError(error.message);
          setIsLoading(false);
        }
      }
    };

    if (!isError) {
      setIsLoading(true);
      handleGetAllIds();
    }
  }, [brand, currentPage, name, price, isError]);

  return (
    <Layout>
      <Title />
      <Filter
        brand={ brand }
        name={ name }
        price={ price }
        setBrand={ setBrand }
        setName={ setName }
        setPrice={ setPrice }
      />
      { isError ? (
        <ErrorBlock isError={ isError } setIsError={ setIsError } />
      ) : (
        <ItemList isLoading={ isLoading } items={ items } />
      ) }
      <PagNav
        currentPage={ currentPage }
        isError={ isError }
        isLoading={ isLoading }
        lastPage={ lastPage }
        setCurrentPage={ setCurrentPage }
      />
    </Layout>
  );
};
