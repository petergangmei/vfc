import React from 'react';
import Navigation from './config/navigation'; // Adjust the path as necessary
import { Provider } from 'react-redux';
import store from './config/redux/store/store';

function App() {
  return (
    <>
      <Provider store={store}>
      <Navigation />
      </Provider>
    </>
  );
}

export default App;