import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';



class App extends Component {
    render () {

      return (
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/post/:post_id' component={Post}/>
          </div>
        </Router>
    );
  }
}

export default App;
