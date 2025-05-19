import React, { useState } from "react";
import "../styles/Card.css";
import "../styles/CommentList.css";

import Input from "./Input";
import Button from "./Button";
import { usePostComment } from "../hooks/useComments";

const Card = ({ image, username, title, category, postContent, postId, comentarios }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(comentarios || []);
  const { createComment, loading: loadingPostComment } = usePostComment();

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    try {
      const newComment = await createComment(postId, {
        text: commentText,
        autor: "67e378fd090bd9fa4d962b86",
      });

      setComments((prev) => [
        ...prev,
        {
          id: newComment.id || Date.now().toString(),
          comment: commentText,
          author: "Usuario fijo",
        },
      ]);

      setCommentText("");
    } catch (error) {
      console.error("Error al comentar:", error);
    }
  };

  return (
    <div className="main-container">
      <img src={image} alt="Avatar" className="avatar-post" />

      <div className="info-container">
        <div className="username-container">@{username}</div>
        <div className="title">{title}</div>

        <div className="category">
          Materia: <strong>{category}</strong>
        </div>

        <div className="content">{postContent}</div>

        <div style={{ marginTop: "20px" }}>
          <strong>Comentar:</strong>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <div style={{ flex: 1 }}>
              <Input
                text="Escribe tu comentario..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <Button
              text={loadingPostComment ? "Enviando..." : "Enviar"}
              onClick={handleCommentSubmit}
            />
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <strong>Comentarios:</strong>
          <ul className="comment-list" style={{ paddingLeft: 0 }}>
            {comments.length === 0 && <p>No hay comentarios aún.</p>}
            {comments.map((c) => (
              <li className="comment-item" key={c.id}>
                <div className="comment-content">
                  <span className="comment-author">{c.author || "Usuario"}</span>
                  <p className="comment-text">{c.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
