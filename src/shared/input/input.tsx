import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  type: 'number' | 'text';
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInput> = ({
  type, placeholder, value, onChange
}) => (
  <Styled.Input placeholder={ placeholder } type={ type } value={ value } onChange={ onChange } />
);
