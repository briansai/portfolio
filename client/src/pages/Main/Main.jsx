import React, { Component, Fragment } from 'react';
import { navCategories } from '../../constants/constants.jsx';
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

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    const { nameInput, emailInput, messageInput } = this.state
    console.log(nameInput, emailInput,  messageInput);
  }

  renderDescription = item => {
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
          <div className="contact-description">
            I'd love to connect with you. Please feel free to reach out to me and send me an email! Thanks!
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
        </Fragment>
      )
    }

    return (
      <Fragment>
        <div className="card-description">
          
        </div>
        <div className="card-info">
        </div>
      </Fragment>
    )
  }

  render () {
    return (
      <Fragment>
        <div className="main-container">
          <div className="main-categories">
            {navCategories.map(category => {
              const { item } = category;
              return (
                <Fragment>
                  <div className="category-header" id={item}>
                    {item}
                  </div>
                  <div className="category-card-container">
                    <div className="category-card">
                      <div className="category-container">
                        {this.renderDescription(item)}
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
