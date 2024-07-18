import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
  return (
    <div className="blog-post-item">
      <h3 className='py-3'>{post.title}</h3>
      <p>{post.description}</p>
      <p className='font fw-semibold'>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className='py-2 pb-3'><Link className='text-decoration-none' to={`/post/${encodeURIComponent(post.title)}`}>Read More</Link></div>
      <hr/>
    </div>
  );
};

export default BlogPostItem;
