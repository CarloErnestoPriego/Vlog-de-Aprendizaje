import React, { useState } from 'react';
import { useGetComments, usePostComment } from '../../hooks/useComments.jsx';
import Input from '../Input.jsx';
import Button from '../Button.jsx';
import './CommentList.css';

const CommentList = ({ postId }) => {
  const { comments, loading, error } = useGetComments();
  const { createComment } = usePostComment();

  const [newComment, setNewComment] = useState('');

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    try {
      await createComment(postId, { text: newComment });
      setNewComment('');
    } catch (err) {
      console.error('Error al crear comentario', err);
    }
  };

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error al cargar comentarios.</p>;

  return (
    <div className="comment-section">
      <div className="comment-form">
        <Input text="Escribe un comentario..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <Button text="Enviar" onClick={handleSubmit} />
      </div>

      <ul className="comment-list">
        {comments.map((c) => (
          <li className="comment-item" key={c.id}>
            <div className="comment-avatar">{c.author?.username?.charAt(0) || 'U'}</div>
            <div className="comment-content">
              <span className="comment-author">{c.author?.username || 'Usuario'}</span>
              <p className="comment-text">{c.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;