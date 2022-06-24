import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [ posts, setPosts ] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts;
  }, []);

  return <div />;
};

export default PostList;
