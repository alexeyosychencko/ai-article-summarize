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
        className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
      />
      <button
        type="submit"
        className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700"
      >
        ⏎
      </button>
    </form>
  );
};

export default ArticleForm;
