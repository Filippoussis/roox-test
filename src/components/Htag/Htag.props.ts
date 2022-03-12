import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h2' | 'h3';
  children: ReactNode;
}

export type {HtagProps};
