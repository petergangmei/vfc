import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsByCategory } from '../../config/redux/features/thunk/apiCallThunk';
import Card from '../../components/common/card';
import { apiRequestStart, apiRequestSuccess, apiRequestFailure } from '../../config/redux/features/slices/apiSlice';

const CategoryScreen = React.memo(() => {
    const dispatch = useDispatch();
    const { name } = useParams(); 
    const raw_data = useSelector(state => state.apiSlice)

  useEffect(() => {
    dispatch(apiRequestSuccess(JSON.parse(localStorage.getItem('keyData'))))
    dispatch(getNewsByCategory(name));
  }, [name]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{name} news</h1>
      <main className="w-full h-screen max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raw_data?.data?.data?.article_category?.articles ? raw_data?.data?.data?.article_category?.articles.map(article => (
          <Card key={article?.id} article={article} />
        )): null}
      </main>
    </div>
    
  );

});

export default CategoryScreen;