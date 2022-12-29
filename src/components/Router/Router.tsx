import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "components/Layout/Layout";
import Spinner from "components/Spinner/Spinner";
import About from "pages/About/About";
import Main from "pages/Main";
import NotFound from "pages/NotFound";

import { routes } from "config/routes";

// @NOTE: just an example of loading page state
const mainLoader = async () => {
  await new Promise(r => setTimeout(r, 1000));

  return {};
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.main} element={<Layout />} loader={mainLoader}>
      <Route index element={<Main />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Route>
  )
);

const Router = () => (
  <RouterProvider fallbackElement={<Spinner />} router={router} />
);

export default Router;
