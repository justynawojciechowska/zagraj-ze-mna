import React, { Component } from 'react';
import APP_DATA from './../../constants';
import { classElement, classBlock } from './../../helpers';
import './NavigationComponent.scss';

export default class NavigationComponent extends Component {
  className = 'app-navigation';

  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className={classElement(this.className)}>
            <a href="/" className={classBlock(this.className, 'logo')}>
              {APP_DATA.appTitle}
            </a>
            <nav className={classBlock(this.className, 'navbar')}>
              <a href="/" className={classBlock(this.className, 'link')}>
                {APP_DATA.login}
              </a>
              <a href="/" className={classBlock(this.className, 'link')}>
                {APP_DATA.register}
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
