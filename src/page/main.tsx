import { useState, useEffect } from 'react';

import { Layout } from '@layout';
import { Title, ProductList, PagNav, ErrorBlock } from '@components/';
import { IProduct } from '@interface/';


export const Main = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isError, setIsError] = useState<string | null>(null);

  return (
    <Layout>
      <Title />
      { isError ? (
        <ErrorBlock isError={ isError } />
      ) : (
        <ProductList isLoading={ isLoading } products={ products } />
      ) }
      <PagNav
        currentPage={ currentPage }
        lastPage={ 200 }
        setCurrentPage={ setCurrentPage }
      />
    </Layout>
  );
};
