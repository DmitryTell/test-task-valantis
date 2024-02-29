import { FC } from 'react';

import { IProduct } from '@interface/';

import * as Styled from './product-list.styled';


interface IProductList {
  products: IProduct[];
  isLoading: boolean;
}

export const ProductList: FC<IProductList> = ({ products, isLoading }) => (
  <Styled.List>
    { isLoading
      ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((item) => (
        <Styled.ItemLoading key={ item } />
      ))
      : products.map((product, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Styled.Item key={ String(index) }>
          <Styled.IdBlock>
            <Styled.IdTitle>ID</Styled.IdTitle>
            <Styled.IdText>{ product.id }</Styled.IdText>
          </Styled.IdBlock>
          <Styled.NameBlock>
            <Styled.NameTitle>Название:</Styled.NameTitle>
            <Styled.NameText>{ product.product }</Styled.NameText>
          </Styled.NameBlock>
          <Styled.PriceBlock>
            <Styled.PriceTitle>Цена:</Styled.PriceTitle>
            <Styled.PriceText>{ product.price }</Styled.PriceText>
          </Styled.PriceBlock>
          <Styled.BrandBlock>
            <Styled.BrandTitle>Бренд:</Styled.BrandTitle>
            <Styled.BrandText>{ product.brand || '-' }</Styled.BrandText>
          </Styled.BrandBlock>
        </Styled.Item>
      )) }
  </Styled.List>
);
