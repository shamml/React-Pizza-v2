import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loadable from 'react-loadable';

import './scss/app.scss';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <>loading...</>,
});

const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'),
);

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<>loading...</>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
