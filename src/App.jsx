import { useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes/routes";

const Nav = lazy(() => import("./components/shared/Nav"));
const Layout = lazy(() => import("./components/shared/Layout"));

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
      </Suspense>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={10}
          unmountOnExit
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location}>
              {appRoutes.map((route) => {
                const Component = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Component
                        cartItemCount={cartItemCount}
                        setCartItemCount={setCartItemCount}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </div>
  );
};

export default App;
