import { FormEvent, ReactElement, useEffect, useState } from "react";
import ArticleForm from "./ArticleForm";
import { useLazyGetSummaryQuery } from "../services/article";
import { ArticleLinkCard } from "./ArticleLinkCard";
import { Loader } from "./Loader";
import { LoadError } from "./LoadError";
import { ArticleSummary } from "./ArticleSummary";
import { ArticleWithKey, Article } from "../types/article";

const Demo = (): ReactElement => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: ""
  });
  const [allArticles, setAllArticles] = useState<ArticleWithKey[]>([]);

  // useLazyGetSummaryQuery hook from get summary query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // get the articles from the local storage
  useEffect(() => {
    const savedArticlesStr = localStorage.getItem("articles");
    if (!savedArticlesStr) return;
    const savedArticles = JSON.parse(savedArticlesStr) as ArticleWithKey[];
    // set empry key for each article
    for (const article of savedArticles) {
      if (!article.key) {
        article["key"] = self.crypto.randomUUID();
      }
    }
    setAllArticles(savedArticles);
  }, []);

  // handler for submitting the article url
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, url: string) => {
    e.preventDefault();

    // check if the article is already in the list
    const existingArticle = allArticles.find((item) => item.url === url);
    if (existingArticle) return setArticle(existingArticle);

    // get the article summary from the api
    const { data } = await getSummary(url);
    if (!data?.summary) return;

    // update the state
    const newArticle = { url, summary: data.summary };
    const updatedAllArticles = [
      ...allArticles,
      { ...newArticle, key: self.crypto.randomUUID() }
    ];

    setArticle(newArticle);
    setAllArticles(updatedAllArticles);
    // save the articles to the local storage
    localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
  };

  const handleSetArticle = (article: Article) => {
    setArticle({ ...article });
  };

  const handleDeleteArticle = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    const updatedAllArticles = allArticles.filter((item) => item.key !== key);
    setAllArticles(updatedAllArticles);
    localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        {/* input form */}
        <section>
          <ArticleForm handleSubmit={handleSubmit} />
        </section>
        {/* brows articles */}
        <section className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((savedArticle) => (
            <ArticleLinkCard
              key={savedArticle.key}
              article={savedArticle}
              handleSetArticle={handleSetArticle}
              handleDeleteArticle={handleDeleteArticle}
            />
          ))}
        </section>
        {/* display the article summary */}
        <section className="my-10 max-w-full flex justify-center items-center">
          {isFetching ? (
            <Loader />
          ) : error ? (
            <LoadError error={error} />
          ) : (
            article.summary && <ArticleSummary summary={article.summary} />
          )}
        </section>
      </div>
    </section>
  );
};

export default Demo;
