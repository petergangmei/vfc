// src/Read.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const ReadScreen = () => {
  const location = useLocation();
  const { data } = location.state || {'data':null}; 
  
  const { slug } = useParams(); // Get the slug from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const raw_data = useSelector(state => state.apiSlice)

  // Simulate fetching article data based on the slug
  useEffect(() => {
    console.log('Fetching article data')
    console.log(JSON.stringify(data))
    console.log(JSON.stringify(location))
    // Find the article based on the slug
  }, [data]);

  if (loading) return <div>Loading...</div>;

  if (!article) return <div>Article not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-4">{article.content}</p>
      {/* Add any other article details you want to display */}
    </div>
  );
};

export default ReadScreen;
