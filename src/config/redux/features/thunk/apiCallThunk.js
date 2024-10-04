import { apiRequestStart, apiRequestSuccess, apiRequestFailure } from '../slices/apiSlice'; 
import { setArticle, setError, setLoading } from '../slices/articleSlice';
import Cookies from 'js-cookie';


export const getHomeData = () => async (dispatch) => {
  console.log('---- making api request ----')
    dispatch(apiRequestStart());
    try {
      const response = await fetch('https://ruangmei.com/api/v1/vfc/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.log('--- Error ----', response.statusText)
      }else{
        console.log('--- success ----')
      }
      const data = await response.json();
      dispatch(apiRequestSuccess(data));
      localStorage.setItem('keyData', JSON.stringify(data)) // 1 minute = 1/1440 of a day
      Cookies.set('myCookie', 'available', { expires: 1 / 1440 }); // 1 minute = 1/1440 of a day
    } catch (error) {
      dispatch(apiRequestFailure(error.message));
    }
  };


  export const getNewsByCategory = (category) => async (dispatch) => {
    
    try {
      const response = await fetch('https://ruangmei.com/api/v1/vfc/news/'+category+'/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

  
      if (!response.ok) {
        console.log('--- Error ----', response.statusText)
      }else{
        console.log('--- success ----')
      }
      const data = await response.json();
      // dispatch(apiRequestStart());
      dispatch(apiRequestSuccess(data));
    } catch (error) {
      dispatch(apiRequestFailure(error.message));
    }
  };

  export const getNewsBySlug = (slug) => async (dispatch) => {
    console.log('---- making api request | news by slug ----')
    dispatch(setLoading(true));
    try {
      const response = await fetch('https://ruangmei.com/api/v1/vfc/article/'+slug+'/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.log('--- Error ----', response.statusText)
      }else{
        console.log('--- success ----')
      }
      const data = await response.json();
      dispatch(setLoading(false));
      dispatch(setArticle(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };