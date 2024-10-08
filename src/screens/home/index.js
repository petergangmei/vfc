import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { getHomeData } from '../../config/redux/features/thunk/apiCallThunk';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/common/card';
import Cookies from 'js-cookie';
import { apiRequestStart, apiRequestSuccess, apiRequestFailure } from '../../config/redux/features/slices/apiSlice'; 
import parse from 'html-react-parser';

const HomeScreen = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const raw_data = useSelector(state => state.apiSlice)

  const handleClick = () => {
    navigate(`/atl/${raw_data?.data?.data?.featured_article?.slug}`, { state: { data: raw_data?.data?.data?.featured_article} });
  };

  useEffect(() => {
    const cookieExists = Cookies.get('myCookie');
    if(cookieExists) {
      dispatch(apiRequestSuccess(JSON.parse(localStorage.getItem('keyData'))))
    }else{
      dispatch(getHomeData());
    }
  }, []);

  useEffect(() =>{
  },[raw_data]);
  
  return (
    <>
    {raw_data?.loading &&(
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
        <div className="animate-spin text-6xl text-gray-900">
        </div>
      </div>
    )}
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Main Header Section */}

      {/* Main Image with Hero Section */}
      {raw_data?.data?.data?.featured_article &&(
        <>
        <section className="w-full max-w-6xl relative" onClick={handleClick}>
        {/* raw_data?.data?.data?.featured_article?.cover_image */}
        <div className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-lg" 
          style={{
            backgroundImage: `url(${raw_data?.data?.data?.featured_article?.cover_image})`,
            height: '400px'
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white text-center py-20">
            <h2 className="text-4xl font-semibold mb-4">{raw_data?.data?.data?.featured_article?.title}</h2>
            {raw_data?.data?.data?.featured_article?.description && (
              <p className="text-lg mb-6 px-10">{parse(raw_data?.data?.data?.featured_article?.description?.substring(0, 200))}</p>
            )}
          </div>
        </div>
      </section>
        </>
      )}
      

      {/* Grid Section with Featured Content */}
      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Latest News</h2>
      </div>

      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raw_data?.data?.data?.latest_article?.map(article => (
           <Card key={article.id} article={article} />
        ))}
      </main>

      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Opinion</h2>
      </div>
    
      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raw_data?.data?.data?.article_category.opinion?.map(article => (
          <Card key={article.id} article={article} />
        ))}
      </main>

      <div className='flex flex-col items-center bg-red justify-start mt-12'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Special Issues</h2>
      </div>

      <main className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raw_data?.data?.data?.article_category?.special_issues?.map(article => (
          <Card key={article.id} article={article} />
        ))}
      </main>


    </div>
    </>
  );
});

export default HomeScreen;
