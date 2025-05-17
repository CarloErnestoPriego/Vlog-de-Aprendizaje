import React from "react";

import { useGetPosts } from "../../hooks/usePosts";

import Card from "../Card";
import Button from "../Button";

import personaIcon from '../../assets/images/persona-icon.png';

const PostList = () => {
  const { posts, loading, error } = useGetPosts();

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error al obtener publicaciones.</p>;

  return (
    <div>
      <Button text="Crear post" />
      <div>
        {posts.map((post) => (
          <Card
            key={post._id}
            image={personaIcon}
            username={post.idAutor || "Usuario Anónimo"}
            title={post.titulo}
            postContent={post.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;