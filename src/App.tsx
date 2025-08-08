import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Products from '@/pages/Products';
import Clientele from '@/pages/Clientele';
import WhyChooseUs from '@/pages/WhyChooseUs';
import NotFound from '@/pages/NotFound';
//import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App