import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const[load,setload]=useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setload(true);
      const response = await fetch(`https://newsapi.org/v2/everything?qInTitle=${decodeURIComponent(id)}&apiKey=288266141c0c4de28c7284a1a4573004`);
      const data = await response.json();
       setPost(data.articles[0]);
       setload(false);
    };
    fetchPosts();
  }, []);
     

  return (
    <div className="">

      {post?
      <div>
      <h2>{post.title}</h2>
      <img src={post.urlToImage} alt={post.title} />
      <p>{post.content}</p>
      <Link to="/">Back</Link>
      </div>:<p>{load?"Loading...":"OOPS Content Removed !!! 😢"}</p>}
    </div>
  );
};

export default BlogPostDetails;
