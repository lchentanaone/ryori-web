import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Menu = lazy(() => import('./pages/Menu/index.tsx'))
const Category = lazy(() => import('./pages/Category/index.tsx'))
const OrderSummary = lazy(() => import('./pages/OrderSummary/index.tsx'))
const ThankYou = lazy(() => import('./pages/ThankYou/index.tsx'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/category" element={<Category />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
