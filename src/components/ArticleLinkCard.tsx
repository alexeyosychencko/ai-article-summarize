import { ReactElement, useState } from "react";
import { bin, copy, tick } from "../assets";
import { Article, ArticleWithKey } from "../types/article";

export const ArticleLinkCard = ({
  article,
  handleSetArticle,
  handleDeleteArticle
}: {
  article: ArticleWithKey;
  handleSetArticle: (article: Article) => void;
  handleDeleteArticle: (e: React.MouseEvent, key: string) => void;
}): ReactElement => {
  const [copied, setCopied] = useState("");

  // copy the url and toggle the icon for user feedback
  const handleCopy = (e: React.MouseEvent, copyUrl: string) => {
    e.stopPropagation();
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="link_card" onClick={() => handleSetArticle(article)}>
      <div className="copy_btn" onClick={(e) => handleCopy(e, article.url)}>
        <img
          src={copied === article.url ? tick : copy}
          alt={copied === article.url ? "tick_icon" : "copy_icon"}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {article.url}
      </p>
      <div
        className="flex justify-end"
        onClick={(e) => handleDeleteArticle(e, article.key)}
      >
        <img
          src={bin}
          alt="bin_icon"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  );
};
