import React from 'react';
import { useGetComments, usePostComment } from '../../hooks/useComments.jsx';

const CommentList = () => {
  const { comments, loading, error } = useGetComments();
  const { createComment } = usePostComment();

  const handleComment = async () => {
    try {
      const newComment = await createComment(1, { content: 'Buen post!' });
      console.log('Comentario creado:', newComment);
    } catch (err) {
      console.error('Error al crear comentario');
    }
  };

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error al cargar comentarios.</p>;

  return (
    <div>
      <button onClick={handleComment}>Comentar</button>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
