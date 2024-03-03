import { useState, useEffect } from 'react';

import { Layout } from '@layout';
import {
  Title, Filter, ProductList, PagNav, ErrorBlock
} from '@components/';
import { IProduct } from '@interface/';

import {
  getAllIds, getIds, getFilteredIds, getItems
} from '../api';
import { filterIds } from '../helper';


export const Main = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [ids, setIds] = useState<string[] | null>(null);
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    if (!name && !price && !brand) {
      getAllIds()
        .then((data) => {
          const result = Math.ceil(data.length / 50);

          setLastPage(result);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });
      getIds(currentPage)
        .then((data) => {
          const result = Object.values(data);

          setIds(result as string[]);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });
    } else {
      getFilteredIds(name, Number(price), brand)
        .then((data) => {
          const resultLastPage = Math.ceil(data.length / 50);
          const resultIds = filterIds(data as string[], currentPage);

          setLastPage(resultLastPage);
          setIds(resultIds);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });
    }
  }, [brand, currentPage, isError, name, price]);

  useEffect(() => {
    if (ids) {
      getItems(ids)
        .then((data) => {
          setIsLoading(false);

          if (data.length) {
            const result = Object.values(data);

            setProducts(result as IProduct[]);
          } else {
            setCurrentPage(1);
            setIsError('Ничего не найдено');
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });
    }
  }, [ids]);

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
        <ProductList isLoading={ isLoading } products={ products } />
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
