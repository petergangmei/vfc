import { apiRequestStart, apiRequestSuccess, apiRequestFailure } from '../slices/apiSlice'; 

export const getHomeData = () => async (dispatch) => {
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