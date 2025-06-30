import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url";

function App() {
  // const pdfUrl = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
  const pdfUrl = "novedades.pdf";

  return (
      <Worker workerUrl={workerSrc}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
  );
}

export default App;
