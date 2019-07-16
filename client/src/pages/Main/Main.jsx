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

  handleName = e => {
    this.setState({ nameInput: e.target.value });
  }

  handleEmail = e => {
    this.setState({ emailInput: e.target.value });
  }

  handleMessage = e => {
    this.setState({ messageInput: e.target.value });
  }

  renderDescription = item => {
    if (item === 'Contact') {
      return (
        <Fragment>
          <div className="contact-description">
            If you'd like to connect, please reach out to me.
          </div>
          <div className="contact-info">
            <div>
              Name: <input onChnage={this.handleName}/>
            </div>
            <div>
              Email: <input onChange={this.handleEmail}/>
            </div>
            <div>
              Message: <textarea onChange={this.handleMessage}/>
            </div>
            <button>Send</button>
          </div>
        </Fragment>
      )
    }
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
