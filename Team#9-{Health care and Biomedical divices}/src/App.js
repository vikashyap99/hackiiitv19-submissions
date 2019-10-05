import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'


class App extends Component {
  render(){
  return (
    <BrowserRouter>

<div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Button} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
         <br />
        <br />
        < br />
    </div>
    
    </BrowserRouter>
    
  );
}
}

export default App;
