import { useEffect } from "react";

export const toggleVisualDebug = () => {
  const body = document.querySelector("body");

  if (body) {
    body.classList.toggle("debug");
  }
};

export function useVisualDebug() {
  useEffect(() => {
    const handleDebug = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();

        toggleVisualDebug();
      }
    };

    window.addEventListener("keypress", handleDebug);

    return () => {
      window.removeEventListener("keypress", handleDebug);
    };
  }, []);
}
