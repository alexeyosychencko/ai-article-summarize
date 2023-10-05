import { ReactElement } from "react";
import "./App.css";
import Header from "./components/Header";
import Demo from "./components/Demo";

const App = (): ReactElement => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Header />
        <Demo />
      </div>
    </main>
  );
};

export default App;
