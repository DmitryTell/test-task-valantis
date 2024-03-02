import { useState, useEffect } from 'react';

import { Layout } from '@layout';
import {
  Title, Filter, ProductList, PagNav, ErrorBlock
} from '@components/';
import { IProduct } from '@interface/';

import { getAllIds, getIds, getItems } from '../api';
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
    getAllIds()
      .then((data) => {
        const result = Math.ceil(data.length / 50);

        setLastPage(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);

    getIds(currentPage)
      .then((data) => {
        const result = Object.values(data);

        setIds(result as string[]);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  }, [currentPage]);

  useEffect(() => {
    if (ids) {
      getItems(ids)
        .then((data) => {
          const result = Object.values(data);

          setIsLoading(false);
          setProducts(result as IProduct[]);
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
        <ErrorBlock isError={ isError } />
      ) : (
        <ProductList isLoading={ isLoading } products={ products } />
      ) }
      <PagNav
        currentPage={ currentPage }
        isLoading={ isLoading }
        lastPage={ lastPage }
        setCurrentPage={ setCurrentPage }
      />
    </Layout>
  );
};
