import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './pag-nav.styled';


interface IPagNav {
  isLoading: boolean;
  currentPage: number;
  isError: string | null;
  lastPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const PagNav: FC<IPagNav> = ({
  isLoading,
  currentPage,
  isError,
  lastPage,
  setCurrentPage,
}) => (
  <Styled.PagNav>
    { isLoading ? (
      <Styled.LoadingButton />
    ) : (
      <Button
        disabled={ Boolean(currentPage === 1 || isError) }
        text='Назад'
        onClick={ () => setCurrentPage(currentPage - 1) }
      />
    ) }
    <Styled.Page>{ currentPage }</Styled.Page>
    { isLoading ? (
      <Styled.LoadingButton />
    ) : (
      <Button
        disabled={ Boolean(currentPage === lastPage || isError) }
        text='Вперед'
        onClick={ () => setCurrentPage(currentPage + 1) }
      />
    ) }
  </Styled.PagNav>
);
