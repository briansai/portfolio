import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import * as EmailValidator from 'email-validator';
import { categories } from '../../constants/constants.jsx';
import { capitalize } from '../../constants/functions.jsx';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      formSubmitted: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      errorMessage: '',
    }
  }

  onOpen = () => {
    this.setState({ modalOpen: true });
  }

  onClose = () => {
    this.setState({
      modalOpen: false,
      formSubmitted: false,
      errorMessage: '',
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    const { handleSubmit } = this.props;
    const validatedEmail = EmailValidator.validate(email);

    if (validatedEmail) {
      if (name && message) {
        handleSubmit({ name, email, subject, message });
        this.setState({
          formSubmitted: true,
          modalOpen: true,
        });  
      } else {
        this.setState({ errorMessage: '* Please fill in all fields' });
      }
    } else {
      this.setState({ errorMessage: '* Email is not valid.  Please try again.' })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  }

  submitConfirm = () => {
    const { modalOpen, email } = this.state;
    const customStyles = {
      overlay: {
        opacity: 3,
        transition: 'opacity linear 0.5s',
        backgroundColor: 'rgba(3, 3, 3, 0.4)'
      },
      content : {
        width: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    return (
      <Modal isOpen={modalOpen} onRequestClose={this.onClose} style={customStyles}>
        <div onClick={this.onClose} className="modalClose">
          X
        </div>
        <div>
          Thank you for reaching out!  Your message from <strong>{email}</strong> has been sent.  I will get back to you shortly. Have a great day.
        </div>
      </Modal>
    )
  }

  renderDescription = category => {
    const { contact, experience, skills, construction } = this.props.images;
    const {item, information } = category;
    if (item === 'Intro') {
      return (
        <div className="intro" />
      )
    } else if (item === 'About') {
      return(
        <div className="category-card-container">
          <div className="about-container">
            <div className="about-header">
              Motivated, self-driven software engineer that has a strong passion to improve quality of life and experience with efficiency, affinity to find technical solutions to problems, and make an impact on people's lives as technology advances.
            </div>
            <div className="about-text">
            </div>
          </div>
        </div>
      )
    } else if (item === 'Contact') {
      const formContent = [
        {
          label: 'Name: ',
          name: 'name',
        },
        {
          label: 'Email: ',
          name: 'email',
        },
        {
          label: 'Subject: ',
          name: 'subject',
        },
        {
          label: 'Message: ',
          name: 'message',
        }
      ]

      return (
        <div className="category-card-container">
          <div className="category-card">
            <div className="contact">
              <form autocomplete="off" className="email" onSubmit={this.handlesubmit}>
                <div className="error-message">
                  {this.state.errorMessage}
                </div>
                {formContent.map(content => {
                  const { label, name } = content;
                  return (
                    <div className="form-category">
                      <Fragment>
                        <label>
                          {label}
                        </label>
                        <div>
                          {name === "message" ? (
                            <textarea type="text" name={name} onChange={this.handleInput} value={this.state.message}/>
                          ) : (
                            <input type="text" name={name} onChange={this.handleInput} value={this.state[name]} />
                          )}
                        </div>
                      </Fragment>
                    </div> 
                  )
                })}
                <div className="buttonContainer">
                  <button onClick={this.onSubmit}>Submit</button>
                </div>
              </form>
              <div className="contact-items">
              {information.map(info=> {
                const { text, link } = info;
                contact.forEach(image => {
                  const { Key, url } = image;
                  if (Key.includes(text)) {
                    info.icon = url;
                  }
                })
                return (
                  <div className="contact-item">
                    <a href={link} className="contact-item" target="_blank">
                      <span>
                        <img src={info.icon} width="32" height="32"/>
                      </span>
                      {' '}
                      <span className="contact-name">
                        {capitalize(text)}
                      </span>
                    </a>
                  </div>
                )
              })}
            </div>
            </div>
          </div>
        </div>
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
      if (!information.backend.length) {
        skills.forEach(item => {
          const { Key, url } = item;
          const skill = Key.substring(Key.indexOf('/') + 1, Key.lastIndexOf('/'))
          const image = Key.substring(Key.lastIndexOf('/') + 1);
          const technology = image.substring(0, image.indexOf('.'));
          information[skill].push({ url, technology })
        })
      }

      const skillEntries = Object.entries(information);
      return (
        <div>
          {skillEntries.map(values => {
            const technology = values[0]
            const categoryName = technology === 'packageManager' ? 'Package Manager' : capitalize(values[0]);
            return (
              <div className="category-card-container">
                <div className="category-card">
                  <div
                    id={technology}
                    className="card-description"
                  >
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
      <div className="category-card-container">
        <div className="category-card">
          <div className="in-progress">
            <img src={construction[0].url} />
          </div>
        </div>
      </div>
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
                  {item !== 'Intro' ? (
                    <div className="category-header" id={item}>
                      <strong>{item}</strong>
                    </div>
                  ) : (
                    null
                  )}
                  <div>
                    {this.renderDescription(category)}
                  </div>
                </Fragment>
              )
            })}
          </div>
        </div>
        {this.state.formSubmitted ? this.submitConfirm() : null}
      </Fragment>
    )
  }
}
