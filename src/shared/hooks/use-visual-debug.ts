import { useEffect } from "react";

/**
 * Ativa e desativa o modo de depuração visual.
 */
const toggleVisualDebug = () => {
  const body = document.querySelector("body");

  if (body) {
    body.appendChild(document.createElement("style")).textContent = `
    .debug * {
			background-color: hsl(0deg 100% 70% / 25%) !important;
			outline: 1px solid hsl(0deg 100% 50% / 85%) !important;
		}

    .debug *::before {
			background-color: hsl(60deg 100% 70% / 45%) !important;
			outline: 1px solid hsl(60deg 100% 50% / 85%) !important;
		}


    .debug *::after {
			background-color: hsl(120deg 100% 70% / 45%) !important;
			outline: 1px solid hsl(120deg 100% 50% / 85%) !important;
		}
		`;

    body.classList.toggle("debug");
  }
};

/**
 * Ativa o modo de depuração visual quando o usuário pressiona Ctrl+B. Isso é útil para depurar o layout da página.
 * Modo de depuração = Adiciona um outline e um fundo vermelho em todos os elementos da página.
 */
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
