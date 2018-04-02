import React, { Component } from 'react';
import APP_DATA from './../../constants';
import { classElement, classBlock } from './../../helpers';
import './MainPage.scss';

export default class MainPage extends Component {
  className = 'main-page';

  render() {
    return (
      <section className={classElement(this.className)}>
        <div className="container">
          <div className={classBlock(this.className, 'content')}>
            <h1 className={classBlock(this.className, 'title')}>{APP_DATA.appTitle}</h1>
          </div>
        </div>
      </section>
    );
  }
}
