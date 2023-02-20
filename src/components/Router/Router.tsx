import { FC, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "components/Layout/Layout";
import Spinner from "components/Spinner/Spinner";

import { routes } from "config/routes";

const About = lazy(() => import("pages/About"));
const Main = lazy(() => import("pages/Main"));
const NotFound = lazy(() => import("pages/NotFound"));
const Report = lazy(() => import("pages/Report"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.main} element={<Layout />}>
      <Route index element={<Main />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.report} element={<Report />} />
    </Route>
  )
);

const Router: FC = () => (
  <Suspense fallback={<Spinner />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Router;
