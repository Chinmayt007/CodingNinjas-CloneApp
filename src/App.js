import { Component } from 'react';
import './App.css';
import Header from './components/header';
import Eventbox from './components/eventbox';
import Footer from './components/footer';
import Important from './components/important';
import Payment from './components/payment';
import Chat from './components/chat'


class App extends Component{
      render(){
        return(
        <div className="App">
          <Header />
          <img className='event-news' src='/images/img.png' alt=''/>
          <Eventbox />
          <Footer/>
          <Important/>
          <Payment />
          <Chat />
        </div>
      )
    }
}

export default App;
