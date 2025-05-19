import React from "react";

import { useGetPosts } from "../../hooks/usePosts";

import Card from "../Card";
import Button from "../Button";

import personaIcon from "../../assets/images/persona-icon.png";

const PostList = () => {
  const { posts, loading, error } = useGetPosts();

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error al obtener publicaciones.</p>;

  return (
    <div>
      <div>
        {posts.map((post) => (
          <Card
            key={post._id}
            image={personaIcon}
            username={post.autor.username}
            title={post.titulo}
            category={post.categoria}
            postContent={post.descripcion}
            postId={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
