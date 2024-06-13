import axios from "axios";
import { useState, useEffect } from "react";

export function useBlogPosts(id) {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const getPost = async (id) => {
    try {
      const results = await axios.get("http://localhost:4000/posts/" + id);
      setPost(results.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEditPost = async (id, setEditPost) => {
    try {
      const results = await axios.get("http://localhost:4000/posts/" + id);
      setEditPost(results.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitEditPost = async (id, body) => {
    try {
      console.log(id + " and " + body.title);
      await axios.put("http://localhost:4000/posts/" + id, body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    post,
    posts,
    isError,
    isLoading,
    getPosts,
    getPost,
    getEditPost,
    submitEditPost,
  };
}
