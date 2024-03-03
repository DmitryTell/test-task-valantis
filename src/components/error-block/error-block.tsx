import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './error-block.styled';


interface IErrorBlock {
  isError: string;
  setIsError: (isError: string | null) => void;
}

export const ErrorBlock: FC<IErrorBlock> = ({ isError, setIsError }) => (
  <Styled.ErrorBlock>
    <Styled.ErrorText>{ isError }</Styled.ErrorText>
    <Button text='Перезагрузить' onClick={ () => setIsError(null) } />
  </Styled.ErrorBlock>
);
