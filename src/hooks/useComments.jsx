import { useState, useEffect } from "react";
import { postComment, getComment } from "../services/commentService.js";

export const useGetComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComment();
        setComments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return { comments, loading, error };
};

export const usePostComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createComment = async (postId, commentData) => {
    setLoading(true);
    try {
      const fullCommentData = {
        ...commentData,
        postId,
      };

      return await postComment(fullCommentData);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createComment, loading, error };
};