import React, { Suspense, lazy, createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Context} from './global/context.ts'
import { placeholderURL } from "./mockData/global.ts";
const Menu = lazy(() => import('./pages/Menu/index.tsx'))
const Category = lazy(() => import('./pages/Category/index.tsx'))
const OrderSummary = lazy(() => import('./pages/OrderSummary/index.tsx'))
const ThankYou = lazy(() => import('./pages/ThankYou/index.tsx'))




const App = () => {
  // Default for globals state happense here...
  const [cart, setCart] = useState([{
    "id": "001",
    "qty": 2,
    "image" : placeholderURL + '150',
    "label" : "Beef Balbacua",
    "price" : 89,
  }])
  return (
    <Context.Provider value={{cart, setCart}}>

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
    </Context.Provider>
  );
}

export default App;
