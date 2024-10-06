import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsBySlug } from '../../config/redux/features/thunk/apiCallThunk';
import TimeDisplay from '../../config/utils/formatTimeAgoDate';
import { apiRequestSuccess } from '../../config/redux/features/slices/apiSlice';
import parse from 'html-react-parser';


const ReadScreen = () => {
  const location = useLocation();
  const data_ = location.state; 
  const dispatch = useDispatch();

  const { slug } = useParams(); 
  const [article, setArticle] = useState(null);

  const raw_data = useSelector(state => state.apiSlice);
  const raw_article = useSelector(state => state.articleSlice);

  useEffect(() => {
    if (data_) {
      setArticle(data_?.data);
    } else {
      dispatch(getNewsBySlug(slug));
    }
    dispatch(apiRequestSuccess(JSON.parse(localStorage.getItem('keyData'))));
  }, [data_]);

  useEffect(() => {
    console.log(' raw article data', raw_article.articles);
    if (raw_article?.articles?.data?.article) {
      setArticle(raw_article?.articles?.data?.article);
    }
  }, [raw_article?.articles?.data?.article]);

  if(raw_article?.loading) return <div>Loading...</div>;

  if (!raw_article?.loading && !article) return <div>Article not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-12 gap-4">
      {/* Empty space on the left (1/12th of the grid) */}
      <div className="col-span-2 hidden lg:block"></div>

      {/* Content section (8/12th of the grid for large screens) */}
      <div className="col-span-12 lg:col-span-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-500">
          <p className="me-1">Posted:</p> <TimeDisplay timestamp={article.created_at} />
        </div>
        {article.writer ? (
          <p className="text-gray-500 mb-4"> &mdash; {article.writer}</p>
        ) : (
          <p className="text-gray-500 mb-4">&mdash; {article?.author?.name}</p>
        )}
        <img
          src={article.cover_image}
          alt={article.title}
          className="w-full md:w-3/4  rounded-lg mb-4"
        />
        
        <p className="text-gray-500 mb-4">{parse(article.content)}</p>
        {/* Add any other article details you want to display */}
      </div>

      {/* Empty space on the right (1/12th of the grid) */}
      <div className="col-span-2 hidden lg:block"></div>
    </div>
  );
};

export default ReadScreen;
