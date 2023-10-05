import { ReactElement, useState } from "react";
import { Article } from "../services/article";
import { copy, tick } from "../assets";

export const ArticleLinkCard = ({
  article,
  handleSetArticle
}: {
  article: Article;
  handleSetArticle: (article: Article) => void;
}): ReactElement => {
  const [copied, setCopied] = useState("");

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="link_card" onClick={() => handleSetArticle(article)}>
      <div className="copy_btn" onClick={() => handleCopy(article.url)}>
        <img
          src={copied === article.url ? tick : copy}
          alt={copied === article.url ? "tick_icon" : "copy_icon"}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {article.url}
      </p>
    </div>
  );
};
