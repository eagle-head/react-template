// src/routes/index.tsx
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </React.Suspense>
    ),
  },
]);
