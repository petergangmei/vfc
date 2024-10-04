import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setArticle } from '../../config/redux/features/slices/articleSlice';


const Card = ({ article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = () => {
    dispatch(setArticle(article));
    navigate(`/atl/${article?.slug}`, { state: { data: article} });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6" onClick={handleClick}>
      <img
        src={article?.cover_image}
        alt={article?.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-1xl font-semibold text-gray-900 mb-4">{article?.title}</h2>
      <p className="text-gray-700 mb-6">{article.content.substring(0, 100)}...</p>
    </div>
  );
};

export default Card;