import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';
import '../BlogPostList.css';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 10; // Number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://newsapi.org/v2/everything?q=tech&apiKey=288266141c0c4de28c7284a1a4573004&page=${currentPage}&pageSize=${postsPerPage}`);
     
      setPosts(res.data.articles);
      setTotalPages(Math.ceil(res.data.totalResults / postsPerPage));
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="blog-post-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <BlogPostItem key={post.url} post={post} />
        ))
      )}
      <div className="pagination">
        <button className='bg-primary text-white border-0 rounded-1' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className='bg-primary text-white border-0 rounded-1' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default BlogPostList;
