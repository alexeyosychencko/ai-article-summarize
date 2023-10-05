import { FormEvent, ReactElement, useState } from "react";
import { linkIcon } from "../assets";

const ArticleForm = ({
  handleSubmit
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, url: string) => void;
}): ReactElement => {
  const [inputVal, setinputVal] = useState<string>("");

  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e, inputVal);
        setinputVal("");
      }}
    >
      <img
        src={linkIcon}
        alt="link_icon"
        className="absolute left-0 my-0 ml-3 w-5"
      />
      <input
        type="url"
        placeholder="Paste the article link"
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
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

export default ArticleForm;
