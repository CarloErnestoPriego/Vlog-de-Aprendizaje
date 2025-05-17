import { useState, useEffect } from "react";
import {
  savePost,
  getPost,
  updatePost,
  deletePost,
} from "../services/postServices.js";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const data = await getPost();
      setPosts(Array.isArray(data) ? data : data.posts || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  return { posts, loading, error };

};

export const useSavePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (postData) => {
    setLoading(true);
    try {
      return await savePost(postData);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error };
};

export const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const modifyPost = async (id, postData) => {
    setLoading(true);
    try {
      return await updatePost(id, postData);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { modifyPost, loading, error };
};

export const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const removePost = async (id) => {
    setLoading(true);
    try {
      return await deletePost(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { removePost, loading, error };
};
