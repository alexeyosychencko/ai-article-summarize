import { ReactElement } from "react";
import { loader } from "../assets";

export const Loader = (): ReactElement => {
  return <img src={loader} alt="loader" className="w-20 h-20 object-contain" />;
};
