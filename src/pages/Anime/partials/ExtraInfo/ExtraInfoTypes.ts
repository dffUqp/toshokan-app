export type TComplexContent = string[] | { name: string; mal_id?: number }[];

interface IExtraInfoItems {
  title: string;
}

export interface IExtraInfoComplexItems extends IExtraInfoItems {
  content: TComplexContent;
}

export interface IExtraInfoSimplyItems extends IExtraInfoItems {
  content: number | string;
}
