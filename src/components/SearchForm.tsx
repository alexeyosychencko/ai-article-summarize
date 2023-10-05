import { FormEvent } from "react";
import { linkIcon } from "../assets";

const SearchForm = ({
  handleSetArticleUrl,
  handleSubmit
}: {
  handleSetArticleUrl: (url: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit(e);
      }}
    >
      <img
        src={linkIcon}
        alt="link_icon"
        className="absolute left-0 my-0 ml-3 w-5"
      />
      <input
        type="url"
        placeholder="Enter a URL"
        value=""
        onChange={(e) => handleSetArticleUrl(e.target.value)}
        required
        className="url_input peer"
      />
      <button
        type="submit"
        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
      >
        ⏎
      </button>
    </form>
  );
};

export default SearchForm;
