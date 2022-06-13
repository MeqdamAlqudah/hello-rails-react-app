import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GreetingMessages from "./GreetingMessages.js"
import { Provider } from "react-redux";
import store from "../configureStore.js";
class App extends React.Component {
  render () {
    console.log(store)
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<h1>"Home!"</h1>}/>
          <Route exact path = "/GreetingMessages" element={<GreetingMessages greeting= {this.props.greeting} />}/>
        </Routes>
        </BrowserRouter>
       </Provider>
    );
  }
}

export default App
