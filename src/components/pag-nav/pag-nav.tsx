import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './pag-nav.styled';


interface IPagNav {
  isLoading: boolean;
  currentPage: number;
  lastPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const PagNav: FC<IPagNav> = ({
  isLoading, currentPage, lastPage, setCurrentPage
}) => (
  <Styled.PagNav>
    { isLoading ? (
      <Styled.LoadingButton />
    ) : (
      <Button disabled={ currentPage === 1 } text='Назад' onClick={ () => setCurrentPage(currentPage - 1) } />
    ) }
    <Styled.Page>{ currentPage }</Styled.Page>
    { isLoading ? (
      <Styled.LoadingButton />
    ) : (
      <Button disabled={ currentPage === lastPage } text='Вперед' onClick={ () => setCurrentPage(currentPage + 1) } />
    ) }
  </Styled.PagNav>
);
