import React, { useState } from "react";
import { useSavePost } from "../hooks/usePosts";

const FormPost = () => {
  const { createPost, loading, error } = useSavePost();

  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.titulo || !formData.categoria || !formData.descripcion) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const newPost = await createPost(formData);
      alert("Publicación creada con éxito");
      setFormData({ titulo: "", categoria: "", descripcion: "" });
      console.log("Post creado:", newPost);
    } catch (err) {
      alert("Error al crear la publicación");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <div>
        <label>Categoría:</label>
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creando..." : "Crear Publicación"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </form>
  );
};

export default FormPost;
