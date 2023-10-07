import { ReactElement } from "react";
import "./index.css";
import Header from "./components/Header";
import Demo from "./components/Demo";

const App = (): ReactElement => {
  return (
    <main>
      <div className="bg-violet-900 w-screen	min-h-screen fixed"></div>
      <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Header />
        <Demo />
      </div>
    </main>
  );
};

export default App;
