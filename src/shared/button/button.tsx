import { FC, HTMLProps } from 'react';

import * as Styled from './button.styled';


interface IButton extends HTMLProps<HTMLButtonElement> {
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

export const Button: FC<IButton> = ({ text, disabled, onClick }) => (
  <Styled.Button disabled={ disabled } type='button' onClick={ onClick }>{ text }</Styled.Button>
);
