import { BaseEditor } from "slate"
import { ReactEditor } from "slate-react"
import { HistoryEditor } from 'slate-history';

export interface CustomText { 
  text?: string,
  bold?: boolean,
  italic?: boolean,
  underline?: string,
  strikethrough?: string,
  fontSize?: number,
  color?: string,
  highlight?: string,
  subscript?: string,
  supscript?: string,
  type?: string,
  children?: CustomText[],
  id?: string 
};

export interface ImageElement {
  type: string,
  children: CustomText[],
  url: string,
  title?: string
};

export type CustomElement = ImageElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}