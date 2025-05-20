import React from "react";

import { useGetPosts } from "../../hooks/usePosts";

import Card from "../Card";

import personaIcon from "../../assets/images/persona-icon.png";
import spidermanIcon from '../../assets/images/spiderman-icon.jpg'

const PostList = () => {
  const { posts, loading, error } = useGetPosts();

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error al obtener publicaciones.</p>;

  return (
    <div>
      <div>
        {posts
          .filter((post) => post._id)
          .map((post) => (
            <Card
              key={post._id}
              image={spidermanIcon}
              username={post.autor.username}
              title={post.titulo}
              category={post.categoria}
              postContent={post.descripcion}
              postId={post._id}
              comentarios={post.comentarios}
            />
          ))}
      </div>
    </div>
  );
};

export default PostList;
