import { FC } from 'react';

import * as Styled from './error-block.styled';


interface IErrorBlock {
  isError: string;
}

export const ErrorBlock: FC<IErrorBlock> = ({ isError }) => (
  <Styled.ErrorBlock>
    <Styled.ErrorText>{ isError }</Styled.ErrorText>
  </Styled.ErrorBlock>
);
