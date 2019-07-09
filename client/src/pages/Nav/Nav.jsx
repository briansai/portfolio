import React, { Component } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Nav.scss';

export default class Nav extends Component {
  render () {
    return (
      <div className="nav-container">
        {categories.map(category => {
          const { item, icon } = category;
          return (
            <div className="nav-category">
              {item}
            </div>
          )
        })}
      </div>
    )
  }
}