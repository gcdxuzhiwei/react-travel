import React, { Suspense, lazy } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spin } from "antd";

const PAGE = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/signIn",
    component: lazy(() => import("./pages/SignIn")),
  },
  {
    path: "/register",
    component: lazy(() => import("./pages/Register")),
  },
  {
    path: "/detail/:touristRouteId",
    component: lazy(() => import("./pages/Detail")),
  },
  {
    component: () => <h1>404 not found 页面去火星了！</h1>,
  },
];

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        {/* 🐂🍺 */}
        <Suspense fallback={<Spin spinning />}>
          <Switch>
            {PAGE.map((config) => (
              <Route {...config} />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
