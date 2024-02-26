import { FC, ReactNode } from 'react';

import * as Styled from './layout.styled';


interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => (
  <Styled.Wrapper>
    <Styled.Container>{ children }</Styled.Container>
  </Styled.Wrapper>
);
