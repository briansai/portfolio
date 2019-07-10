import React, { Component, Fragment } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Main.scss';

export default class Main extends Component {
  render () {
    return (
      <Fragment>
        <div className="main-container">
          <div className="main-categories">
            {categories.map(category => {
              const { item } = category;
              return (
                <Fragment>
                  <div className="category-header">
                    {item}
                  </div>
                  <div className="category-card-container">
                    <div className="category-card">
                      <div className="category-container">
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}
