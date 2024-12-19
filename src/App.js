import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={routes}></RouterProvider>
      </Suspense>
    </div>
  );
}

export default App;
