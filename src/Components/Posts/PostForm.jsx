import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!titulo.trim() || !categoria.trim() || !descripcion.trim()) {
      setError("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      await onSubmit({ titulo, categoria, descripcion });
      // Limpiar formulario al enviar correctamente
      setTitulo("");
      setCategoria("");
      setDescripcion("");
    } catch (err) {
      setError("Error al guardar la publicación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Publicación</h2>

      <div>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título de la publicación"
        />
      </div>

      <div>
        <label htmlFor="categoria">Categoría</label>
        <input
          type="text"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoría"
        />
      </div>

      <div>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción de la publicación"
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar Publicación"}
      </button>
    </form>
  );
};

export default PostForm;