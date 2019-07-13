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
                <div className="nav-category">
                  {/* <span> */}
                    <i class="material-icons">{icon}</i> {item}
                  {/* </span> */}
                  {/* include description css */}
                  {/* <span className="nav-description">
                  </span> */}
                </div>
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}