import { FormEvent, ReactElement, useState } from "react";
import SearchForm from "./SearchForm";
import { Article } from "../services/article";

const Demo = (): ReactElement => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: ""
  });

  const handleSetArticleUrl = (url: string) => {
    setArticle({ ...article, url });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    alert("You submitted the form!");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <SearchForm
          handleSetArticleUrl={handleSetArticleUrl}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default Demo;
