import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src={article?.cover_image}
        alt={article?.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{article?.title}</h2>
      <p className="text-gray-700 mb-6">{article.content.substring(0, 100)}...</p>
      <Link 
        to={{ pathname: `/atl/${article?.slug}`, state: { data: article } }} 
        className="text-blue-500 hover:underline"
      >
        Read More
      </Link>
    </div>
  );
};

export default Card;