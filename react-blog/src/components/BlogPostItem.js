import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
  return (
    <div className="blog-post-item">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link to={`/post/${encodeURIComponent(post.title)}`}>Read More</Link>
    </div>
  );
};

export default BlogPostItem;
