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
    <Button
      disabled={ Boolean(currentPage === 1 || isError || isLoading) }
      text='Назад'
      onClick={ () => setCurrentPage(currentPage - 1) }
    />
    <Styled.Page>{ currentPage }</Styled.Page>
    <Button
      disabled={ Boolean(currentPage === lastPage || isError || isLoading) }
      text='Вперед'
      onClick={ () => setCurrentPage(currentPage + 1) }
    />
  </Styled.PagNav>
);
