// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import FormPost from '../components/FormPost';
import CommentList from '../components/CommentList';

const AppRoutes = () => {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Crear Publicación</Link>
        <Link to="/comments">Comentarios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FormPost />} />
        <Route path="/comments" element={<CommentList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
