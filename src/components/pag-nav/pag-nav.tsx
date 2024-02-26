import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './pag-nav.styled';


interface IPagNav {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const PagNav: FC<IPagNav> = ({ currentPage, lastPage, setCurrentPage }) => (
  <Styled.PagNav>
    <Button disabled={ currentPage === 1 } text='Назад' onClick={ () => setCurrentPage(currentPage - 1) } />
    <Styled.Page>{ currentPage }</Styled.Page>
    <Button disabled={ currentPage === lastPage } text='Вперед' onClick={ () => setCurrentPage(currentPage + 1) } />
  </Styled.PagNav>
);
