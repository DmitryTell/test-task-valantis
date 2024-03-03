import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  disabled?: boolean;
  type: 'number' | 'text';
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInput> = ({
  disabled, type, placeholder, value, onChange
}) => (
  <Styled.Input
    disabled={ disabled }
    placeholder={ placeholder }
    type={ type }
    value={ value }
    onChange={ onChange }
  />
);
