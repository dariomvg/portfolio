import cv from "../assets/pdf/curriculum.pdf";

export const openPDF = () => {
  const newWindow = window.open(cv, "_blank");
  if (!newWindow) {
    alert(
      "La ventana emergente fue bloqueada. Asegúrate de permitir ventanas emergentes en tu navegador."
    );
  }
};
