import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string;
}

export type {TextareaProps};
