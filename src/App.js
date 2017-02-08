import React, { Component } from 'react';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Presentation from './components/presentation/Presentation';
import Menu from './components/menu/Menu';
import GoogleMap from './components/googleMap/GoogleMap';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>

        <h1> HELLO WORLD </h1>


        <Header/>
        <Slider/>
        <Presentation/>
        <Menu/>
        <GoogleMap/>
        <Footer/>


      </div>
    );
  }
}

export default App;
