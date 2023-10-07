import { ReactElement } from "react";
import { logo } from "../assets";

const Header = (): ReactElement => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("#")}
          className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black"
        >
          GitHub
        </button>
      </nav>

      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-gray-300 sm:text-6xl text-center">
        Summarize Articles with <br />
        <span className="font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-300 sm:text-xl text-center max-w-2xl">
        Simplify your reading with Summize, an AI-powered summarizer that can
        summarize any article in seconds.
      </h2>
    </header>
  );
};

export default Header;
