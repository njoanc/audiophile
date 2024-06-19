import { lazy } from "react";
import Home from "../components/pages/home/Home";

const Headphones = lazy(() => import("../components/pages/Headphones"));
const Earphones = lazy(() => import("../components/pages/Earphones"));
const Speakers = lazy(() => import("../components/pages/Speakers"));
const ProductDetails = lazy(() => import("../components/pages/ProductDetails"));
const Checkout = lazy(() => import("../components/pages/Checkout"));
const NotFound = lazy(() => import("../components/pages/NotFound"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/headphones",
    component: Headphones,
  },
  {
    path: "/earphones",
    component: Earphones,
  },
  {
    path: "/speakers",
    component: Speakers,
  },
  {
    path: "/products/:slug",
    component: ProductDetails,
  },
  {
    path: "/checkout",
    component: Checkout,
  },

  {
    path: "*",
    component: NotFound,
  },
];
