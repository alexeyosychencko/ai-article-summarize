import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ReactElement } from "react";

export const LoadError = ({
  error
}: {
  error: FetchBaseQueryError | SerializedError;
}): ReactElement => {
  return (
    <p className="font-inter font-bold text-black text-center">
      Well, that wasn't supposed to happen...
      <br />
      <span className="font-satoshi font-normal text-gray-700">
        {(error as FetchBaseQueryError).status === 404
          ? "The article was not found"
          : (error as SerializedError).message}
      </span>
    </p>
  );
};
