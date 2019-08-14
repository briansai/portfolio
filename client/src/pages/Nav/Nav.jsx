import React, { Component, Fragment } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Nav.scss';

export default class Nav extends Component {
  render () {
    return (
      <Fragment>
        <div className="nav-container">
          <div className="name-container">
            <div className="nav-name">
              Brian Sai
            </div>
            <div className="nav-occupation">
              FullStack Developer
            </div>
          </div>
          <div>
            {categories.map(category => {
              const { item, icon } = category;
              return (
                <Fragment>
                  {item !== 'intro' ? (
                    <a href={`#${item}`}>
                    <div className="nav-category">
                      <span>
                        <i className="material-icons">{icon}</i> 
                      </span>
                      <span className="nav-description">
                        {item}
                      </span>
                    </div>
                  </a>
                  ) : (
                    null
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}