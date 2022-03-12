import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'active';
}

export type {ButtonProps};
