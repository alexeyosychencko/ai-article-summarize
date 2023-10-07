import { ReactElement, useState } from "react";
import { bin, copy, tick } from "../assets";
import { Article } from "../types/article";

export const ArticleLinkCard = ({
  article,
  handleSetArticle,
  handleDeleteArticle
}: {
  article: Article;
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
    <div
      className="p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer"
      onClick={() => handleSetArticle(article)}
    >
      <div
        className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer"
        onClick={(e) => handleCopy(e, article.url)}
      >
        <img
          src={copied === article.url ? tick : copy}
          alt={copied === article.url ? "tick_icon" : "copy_icon"}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
      <p className="flex-1 font-satoshi text-blue-600 font-medium text-sm truncate">
        {article.url}
      </p>
      <div
        className="flex justify-end"
        onClick={(e) => handleDeleteArticle(e, article.url)}
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
