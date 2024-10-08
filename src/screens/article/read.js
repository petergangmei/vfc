import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsBySlug } from '../../config/redux/features/thunk/apiCallThunk';
import TimeDisplay from '../../config/utils/formatTimeAgoDate';
import { apiRequestSuccess } from '../../config/redux/features/slices/apiSlice';
import parse from 'html-react-parser';
import ShareButtons from '../../components/common/share';
import { Helmet } from 'react-helmet';


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
    if (raw_article?.articles?.data?.article) {
      setArticle(raw_article?.articles?.data?.article);
    }
  }, [raw_article?.articles?.data?.article]);

  if(raw_article?.loading) return <div>Loading...</div>;

  if (!raw_article?.loading && !article) return <div>Article not found.</div>;

  console.log('---- article ---', article?.cover_image);
  return (
    <>
      <Helmet>
        <title>VFC - {article?.title}</title>
        <meta name="description" content='{article?.description}' />
        <meta property="og:title" content={article?.title} />
        <meta property="og:description" content={article?.descriptio} />
        <meta property="og:image" content={article?.cover_image} />
        <meta property="og:url" content={article?.cover_image} />
      </Helmet>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-12 gap-4">
      {/* Empty space on the left (1/12th of the grid) */}
      <div className="col-span-2 hidden lg:block"></div>

      {/* Content section (8/12th of the grid for large screens) */}
      <div className="col-span-12 lg:col-span-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center mb-5 text-gray-500  justify-between">
          <p className="me-1 flex text-sm"><p>Posted: </p> <TimeDisplay timestamp={article.created_at} /> </p>
          <ShareButtons url={window.location.href} title={article.title} />
        </div>
        {article.writer ? (
          <p className="text-gray-500 mb-4"> &mdash; {article.writer}</p>
        ) : (
          <p className="text-gray-500 mb-4">&mdash; {article?.author?.name}</p>
        )}
        {article.description && (
          <p className="text-gray-500 mb-4">
            {article?.description}
          </p>
        )}
        <img
          src={article.cover_image}
          alt={article.title}
          className="w-full md:w-3/4  rounded-lg mb-4"
        />
        {article.cover_image_caption && (
          <p className="text-gray-500 italic mb-5">
            {article.cover_image_caption}
          </p>
        )}
        
        <p className="text-gray-800 mb-4">{parse(article.content)}</p>
        {article.content_warning &&(
        <>
        <hr/>
        <p className='text-gray-600 mt-2 text-xs italic'>* {article.content_warning}</p>
        </>
        )}
        {/* Add any other article details you want to display */}
      </div>

      {/* Empty space on the right (1/12th of the grid) */}
      <div className="col-span-2 hidden lg:block"></div>
    </div>
    </>
    
  );
};

export default ReadScreen;
