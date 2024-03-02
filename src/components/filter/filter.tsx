import { FC } from 'react';

import { Input } from '@shared/';

import * as Styled from './filter.styled';


interface IFilter {
  name: string;
  price: string;
  brand: string;
  setName: (name: string) => void;
  setPrice: (price: string) => void;
  setBrand: (brand: string) => void;
}

export const Filter: FC<IFilter> = ({
  name,
  price,
  brand,
  setName,
  setPrice,
  setBrand,
}) => (
  <Styled.FilterContainer>
    <Styled.FilterTitle>Фильтровать по:</Styled.FilterTitle>
    <Styled.FilterForm>
      <Input placeholder='Название' type='text' value={ name } onChange={ (e) => setName(e.target.value) } />
      <Input placeholder='Цена' type='number' value={ price } onChange={ (e) => setPrice(e.target.value) } />
      <Input placeholder='Бренд' type='text' value={ brand } onChange={ (e) => setBrand(e.target.value) } />
    </Styled.FilterForm>
  </Styled.FilterContainer>
);
