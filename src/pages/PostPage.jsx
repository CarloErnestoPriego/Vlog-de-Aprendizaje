// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const AppRoutes = () => {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Publicaciones</Link>
        <Link to="/create">Crear Publicación</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<PostFormWrapper />} />
      </Routes>
    </Router>
  );
};

import { useNavigate } from 'react-router-dom';
import { useSavePost } from '../hooks/usePosts';

const PostFormWrapper = () => {
  const { createPost } = useSavePost();
  const navigate = useNavigate();

  const handleSubmit = async (postData) => {
    try {
      await createPost(postData);
      alert('Publicación creada correctamente');
      navigate('/');
    } catch (error) {
      alert('Error al crear la publicación');
      console.error(error);
    }
  };

  return <PostForm onSubmit={handleSubmit} />;
};

export default AppRoutes;
