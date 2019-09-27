import React, { Component, Fragment } from 'react';
import scrollToElement from 'scroll-to-element';
import { categories } from '../../constants/constants.jsx';
import './Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll = el => {
    scrollToElement(el, {
      duration: 1500
    });
  }

  render () {
    const { images } = this.props
    const self = images[1].Key;
    return (
      <div className="nav-container">
        <div className="name-container">
          <div className="nav-image">
            <img src={`https://brian-portfolio.s3.amazonaws.com/${self}`} alt="Brian Sai"/>
          </div>
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
                {item !== 'Intro' ? (
                  <div onClick={() => this.handleScroll(`#${item}`)} className="nav-category">
                    <span>
                      <i className="material-icons">{icon}</i> 
                    </span>
                    <span className="nav-description">
                      {item}
                    </span>
                  </div>
                ) : (
                  null
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    )
  }
}