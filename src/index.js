import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import App from './App';
import MyRoutes from './routes';
import { Provider } from 'react-redux'
import Reducer from './redux/reducer'
import { UserDetailsContext, UserDetailsProvider } from './context';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <MyRoutes />
  //   </BrowserRouter>
  // </Provider>
  <Provider store={store}>
    <BrowserRouter>
      <UserDetailsProvider>
        <MyRoutes />
      </UserDetailsProvider>
    </BrowserRouter>
  </Provider>
);
