import React, { useState } from "react";
import "../styles/Card.css";

import Input from "./Input";
import Button from "./Button";
import { usePostComment } from "../hooks/useComments";

const Card = ({ image, username, title, category, postContent, postId }) => {
  const [commentText, setCommentText] = useState("");
  const { createComment, loading } = usePostComment();

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    try {
      await createComment(postId, { text: commentText });
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

        {/* Mostrar categoría */}
        <div className="category">Materia: <strong>{category}</strong></div>

        <div className="content">{postContent}</div>

        <div style={{ marginTop: "20px" }}>
          <strong>Comentar:</strong>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "10px" }}>
            <div style={{ flex: 1 }}>
              <Input
                text="Escribe tu comentario..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <Button text={loading ? "Enviando..." : "Enviar"} onClick={handleCommentSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;