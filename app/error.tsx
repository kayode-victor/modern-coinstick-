"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col items-center py-10 md:py-16 lg:py-20 gap-10">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-wider">
        Something went wrong!
      </h2>
      <div className="flex gap-4">
        <p>ckick to reset:</p>
        <button
          className="font-medium underline underline-offset-4"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
