import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import Genero from '../components/generos/Genero';
import Director from '../components/directores/Director';
import Productora from '../components/productoras/Productora';
import Tipo from '../components/tipos/Tipo';
import Media from '../components/medias/Media';
import Login from '../components/login/login';
import NotFound from '../components/ui/NotFound';
import Footer from '../components/ui/Footer';

export default function AppRouter() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/login';
  const hideFooter = location.pathname === '/login';

  return (
    <div>
      {!hideNavBar && <NavBar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/generos" element={<Genero />} />
          <Route path="/directores" element={<Director />} />
          <Route path="/productoras" element={<Productora />} />
          <Route path="/tipos" element={<Tipo />} />
          <Route path="/medias" element={<Media />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}
