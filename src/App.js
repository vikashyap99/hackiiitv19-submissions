import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'


class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <p>Prem is a hacker!!</p>
      < Button / >
    </div>
  );
}
}

export default App;
