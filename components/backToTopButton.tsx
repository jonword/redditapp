"use client";

import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <button
          className="button fixed bottom-5 right-1 h-10 w-28 rounded-md text-white bg-gray-800 hover:bg-stone-500"
          onClick={scrollUp}
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
