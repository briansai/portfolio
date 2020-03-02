import React, { Component, Fragment } from 'react';
import scrollToElement from 'scroll-to-element';
import { categories, capitalize } from '../../../constants/index.jsx';
import './Categories.scss';


export default class Categories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hoverSkills: false,
    }
  }

  handleScroll = el => {
    scrollToElement(el, { duration: 500 });
  }

  handleToggle = () => {
    this.setState({ hoverSkills: !this.state.hoverSkills })
  }

  renderCategory = category => {
    const { item, icon, information } = category;
    const skills = Object.keys(information);
    const skillsHover = item === 'Skills' ? this.handleToggle : null

    return (
      <Fragment>
        {item !== 'Intro' ? (
          <div
            className="category-container"
            onMouseEnter={skillsHover}
            onMouseLeave={skillsHover}
          >
            <div
              className="nav-category"
              onClick={() => this.handleScroll(`#${item}`)}
            >
              <span>
                <i className="material-icons">{icon}</i> 
              </span>
              <span className="nav-description">
                {item}
              </span>
            </div>
            <div>
              {this.renderSkillDropdown(item, skills)}
            </div>
          </div>
        ) : (
          null
        )}
      </Fragment>
    )
  }

  renderSkillDropdown = (item, skills) => (
    <Fragment>
      {this.state.hoverSkills && item === 'Skills' ? (
        <div className="dropdown">
          {skills.map(tech => {
            const technology = tech === 'packageManager' ? 'Package Manager' : capitalize(tech);
            return (
              <div
                className="skill-container"
                onClick={() => this.handleScroll(`#${tech}`)}
              >
                <div className="skill">
                  {technology}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        null
      )}
    </Fragment>
  )

  render() {
    return (
      <Fragment>
        {categories.map(category => this.renderCategory(category))}
      </Fragment>
    )
  }
}