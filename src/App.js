import React, { Component } from 'react';
import MainPage from './pages/main-page/MainPage';
import NavigationComponent from './components/navigation/NavigationComponent';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <NavigationComponent />
        <MainPage />
      </div>
    );
  }
}
