import { ReactElement } from "react";
import {logo} from "../assets";

const Header = (): ReactElement => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
                <button 
                    type="button"
                    onClick={() => window.open("#")} 
                    className="blank_btn">
                        GitHub
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an AI-powered summarizer that can summarize any article in seconds.
            </h2>
        </header>
    )
};

export default Header;
