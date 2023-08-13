import React from 'react';
import Header from './Components/Header/Header';
import { CartProvider } from './Components/Cart/CartContext/CartContext';
import ProductMenu from './Components/ProductMenu/ProductMenu';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';

function App() {
  // const router = createBrowserRouter([
  //   { path: '/', element: <ProductMenu /> },
  //   { path: '/about', element: <About /> }
  // ])
  return (
    <CartProvider>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='product' element={<ProductMenu />} />
        <Route path='about' element={<About />} />
      </Routes>
      {/* <ProductMenu /> */}
    </CartProvider>
  );
}

export default App;
