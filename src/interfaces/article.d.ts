export interface Article {
  url: string;
  summary: string;
}

export type ArticleWithKey = Article & { key: string };
