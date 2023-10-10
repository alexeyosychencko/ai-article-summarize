import { FormEvent, ReactElement, useEffect, useState } from "react";
import ArticleForm from "./ArticleForm";
import { useLazyGetSummaryQuery } from "../services/article";
import { ArticleLinkCard } from "./ArticleLinkCard";
import { Loader } from "./Loader";
import { LoadError } from "./LoadError";
import { ArticleSummary } from "./ArticleSummary";
import { Article } from "../types/article";

const Demo = (): ReactElement => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const selectedArticle = allArticles.find((item) => item.url === selectedUrl);

  // useLazyGetSummaryQuery hook from get summary query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // get the articles from the local storage
  useEffect(() => {
    const savedArticlesStr = localStorage.getItem("articles");
    if (!savedArticlesStr) return;
    setAllArticles(JSON.parse(savedArticlesStr) as Article[]);
  }, []);

  // handler for submitting the article url
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, url: string) => {
    e.preventDefault();

    setSelectedUrl(url);
    // check if the article is already in the list
    const existingArticle = allArticles.find((item) => item.url === url);
    if (existingArticle) return;

    // get the article summary from the api
    const { data } = await getSummary(url);
    if (!data?.summary) return;

    // update the state
    const updatedAllArticles = [...allArticles, { url, summary: data.summary }];
    setAllArticles(updatedAllArticles);
    // save the articles to the local storage
    localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
  };

  const handleSetArticle = (url: string) => {
    setSelectedUrl(url);
  };

  const handleDeleteArticle = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    const clearArticles = allArticles.filter((item) => item.url !== url);
    setAllArticles(clearArticles);
    localStorage.setItem("articles", JSON.stringify(clearArticles));
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
          {allArticles.map((article) => (
            <ArticleLinkCard
              key={article.url}
              url={article.url}
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
            selectedArticle && (
              <ArticleSummary summary={selectedArticle.summary} />
            )
          )}
        </section>
      </div>
    </section>
  );
};

export default Demo;
