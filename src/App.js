import React from 'react';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import './App.css';
import {Provider} from 'react-redux'
//  import { createStore, applyMiddleware } from 'redux';
import store from './store'

//const store = createStore(() => [], {}, applyMiddleware());
class App extends React.Component{

  render(){
    return (
      <Provider store={store}>
      <div className="App">
          <PostForm/>
          <Posts/>
      </div>
      </Provider>
    );
  }
  
}

export default App;
