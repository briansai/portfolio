import React, { Component, Fragment } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  capitalize = word => word[0].toUpperCase() + word.slice(1);

  renderDescription = category => {
    const {item, information, text } = category;
    if (item === 'Intro') {
      return (
        <div className="intro">
        </div>
      )
    } else if (item === 'About') {
      return(
      <Fragment>
        <div className="category-card-container">
        <div className="about-container">
          <div className="about-header">
            Motivated, self-driven software engineer that has a passion to learn new technologies, create scalable applications, and scale large data efficiently.
          </div>
          <div className="about-text">
            
          </div>
        </div>
        </div>
      </Fragment>
      )
    } else if (item === 'Contact') {
      return (
        <Fragment>
          <div className="category-card-container">
          <div className="category-card">
            <div className="contact-info">
              <div>
                {text}
              </div>
              {information.map(info=> {
                const { icon, text, link } = info;
                const target = text === 'contact' ? null : "_blank";
                return (
                  <span className="items">
                    <a href={link} className="contact-item" target={target}>
                      <div>
                        <img src={icon} width="110" height="96"/>
                      </div>
                      <div className="contact-name">
                        {this.capitalize(text)}
                      </div>
                    </a>
                  </span>
                )
              })}
            </div>
          </div>
          </div>
        </Fragment>
      )
    } else if (item === 'Experience') {
      return (
        <Fragment>
          {information.map(info => {
            const { logo, company, title, experiences } = info;
            return (
              <div className="category-card-container">
              <div className="category-card">
                <div className="card-description">
                  <span className="logo">
                    <img src={logo} alt="logo" width="40" height="40" />
                  </span>
                  <span className="company">
                    <strong>{company}</strong>
                  </span>
                  <span className="title">
                    {title}
                  </span>
                </div>
                <ul className="card-info">
                  {experiences.map(experience => (
                    <li className="card-item">
                      {experience} <br />
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            )
          })}
        </Fragment>
      )
    } else if (item === 'Skills') {
      const categoryKeys = Object.keys(information);
      const categoryValues = Object.values(information);
      return (
        <div>
          {categoryValues.map((values, index) => {
            const categoryName = categoryKeys[index] === 'packageManager' ? 'Package Manager' : categoryKeys[index];
            return (
              <div className="category-card-container">
              <div className="category-card">
                <div className="card-description">
                  {this.capitalize(categoryName)}
                </div>
                <span className="card-skills">
                  {values.map(tech => (
                    <div className="skill-item">
                      <div>
                        <img src={tech.logo} width="75" height="75"/>
                      </div>
                      <div>
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </span>
              </div>
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <Fragment>
        <div className="category-card-container">
        <div className="category-card">
          <div className="card-description">
          </div>
          <div className="card-info">
          </div>
        </div>
        </div>
      </Fragment>
    )
  }

  render () {
    return (
      <Fragment>
        <div className="main-container">
          <div className="main-categories">
            {categories.map(category => {
              const { item } = category;
              const section = item !== 'Resume' ? (
                <Fragment>
                  {item !== 'Intro' ? (
                    <div className="category-header" id={item}>
                    {item}
                  </div>
                  ) : (
                    null
                  )}
                  <div>
                    {this.renderDescription(category)}
                  </div>
                </Fragment>
              ) : (
                null
              )

              return (
                section
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}
