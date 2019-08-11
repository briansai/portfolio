import React, { Component, Fragment } from 'react';
import { categories } from '../../constants/constants.jsx';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
      emailInput: '',
      messageInput: '',
    }
  }

  capitalize = word => word[0].toUpperCase() + word.slice(1);

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    const { nameInput, emailInput, messageInput } = this.state
    console.log(nameInput, emailInput,  messageInput);
  }

  renderDescription = category => {
    const {item, information} = category;
    if (item === 'Contact') {
      const inputs = [
        {
          text: 'Name:',
          name: 'nameInput',
        },
        {
          text: 'Email',
          name: 'emailInput',
        },
        {
          text: 'Message',
          name: 'messageInput',
        }
      ]

      return (
        <Fragment>
          <div className="category-card">
            <div className="category-container">
              <div className="contact-description">
              </div>
              <div className="contact-info">
                <form>
                  {inputs.map(input => {
                    const { text, name } = input;
                    return (
                      <Fragment>
                        <label>
                          {text}
                          <input
                            type="text"
                            name={name}
                            onChange={this.handleInputChange}
                          />
                        </label>
                        <br />
                      </Fragment>
                    )
                  })}
                  <button onClick={this.handleSubmit}>Send</button>
                </form>
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
            )
            })}
          </div>
        )}

    return (
      <Fragment>
        <div className="category-card">
          <div className="card-description">
          </div>
          <div className="card-info">
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
              return (
                <Fragment>
                  <div className="category-header" id={item}>
                    {item}
                  </div>
                  <div className="category-card-container">
                    {this.renderDescription(category)}
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
