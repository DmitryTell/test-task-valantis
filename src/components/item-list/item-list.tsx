import { FC } from 'react';

import { IItem } from '@interface/';

import * as Styled from './item-list.styled';


interface IItemList {
  items: IItem[];
  isLoading: boolean;
}

export const ItemList: FC<IItemList> = ({ items, isLoading }) => (
  <Styled.List>
    { isLoading
      ? ['1', '2', '3', '4', '5'].map((item) => (
        <Styled.ItemLoading key={ item } />
      ))
      : items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Styled.Item key={ String(index) }>
          <Styled.IdBlock>
            <Styled.IdTitle>ID</Styled.IdTitle>
            <Styled.IdText>{ item.id }</Styled.IdText>
          </Styled.IdBlock>
          <Styled.NameBlock>
            <Styled.NameTitle>Название:</Styled.NameTitle>
            <Styled.NameText>{ item.product }</Styled.NameText>
          </Styled.NameBlock>
          <Styled.PriceBlock>
            <Styled.PriceTitle>Цена:</Styled.PriceTitle>
            <Styled.PriceText>{ item.price }</Styled.PriceText>
          </Styled.PriceBlock>
          <Styled.BrandBlock>
            <Styled.BrandTitle>Бренд:</Styled.BrandTitle>
            <Styled.BrandText>{ item.brand || '-' }</Styled.BrandText>
          </Styled.BrandBlock>
        </Styled.Item>
      )) }
  </Styled.List>
);
