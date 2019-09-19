import React, { Component, Fragment } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  capitalize = word => word[0].toUpperCase() + word.slice(1);

  renderDescription = category => {
    const { contact, experience, intro, skills } = this.props.images;
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
              Motivated, self-driven software engineer that has a passion for automation and scalable applications.
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
                  const { text, link } = info;
                  const target = text === 'contact' ? null : "_blank";
                  contact.forEach(image => {
                    const { Key, url } = image;
                    if (Key.includes(text)) {
                      info.icon = url;
                    }
                  })     
                  return (
                    <span className="items">
                      <a href={link} className="contact-item" target={target}>
                        <div>
                          <img src={info.icon} width="110" height="96"/>
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
        <div className="experience">
          {information.map(info => {
            let { logo, company, title, experiences, text } = info;
            experience.forEach(exp => {
              const image = exp.Key;
              const textAfterLastSlash = image.substring(image.lastIndexOf('/') + 1);
              const imageName = textAfterLastSlash.substring(0, textAfterLastSlash.lastIndexOf('.'));
              if (imageName === text) {
                logo = exp.url;
              }
            })
            return (
              <div className="small-card-container">
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
            )
          })}
        </div>
      )
    } else if (item === 'Skills') {
      skills.forEach(item => {
        const { Key, url } = item;
        const skill = Key.substring(Key.indexOf('/') + 1, Key.lastIndexOf('/'))
        const image = Key.substring(Key.lastIndexOf('/') + 1);
        const technology = image.substring(0, image.indexOf('.'));
        information[skill].push({ url, technology })
      })

      const skillEntries = Object.entries(information);
      return (
        <div>
          {skillEntries.map(values => {
            const categoryName = values[0] === 'packageManager' ? 'Package Manager' : this.capitalize(values[0]);
            return (
              <div className="category-card-container">
                <div className="category-card">
                  <div className="card-description">
                    {categoryName}
                  </div>
                  <span className="card-skills">
                    {values[1].map(tech => (
                      <div className="skill-item">
                        <div>
                          <img src={tech.url} width="75" height="75"/>
                        </div>
                        <div>
                          {tech.technology}
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
