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
    <div className="container py-4">

      {post?
      <div className='w-75 mx-auto'>
      <h2 className=' fs-3 pb-4'>{post.title}</h2>
      <img className=' img-fluid' src={post.urlToImage} alt={post.title} />
      <p className='pt-4'>{post.content}</p>
      <div className='py-2'><Link className='text-decoration-none text-white bg-primary px-4 py-2 fs-6 rounded-1' to="/">Back</Link></div>
      </div>:<p>{load?"Loading...":"OOPS Content Removed !!! 😢"}</p>}
    </div>
  );
};

export default BlogPostDetails;
