import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Main from '../Main/Main.jsx';
import Nav from '../Nav/Nav.jsx';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        contact: [],
        experience: [],
        favicon: [],
        intro: [],
        skills: [],
      },
    }
  }

  componentDidMount() {
    axios.get('/images')
      .then(res => {
        res.data.forEach(image => {
          const { Key } = image;
          const { contact, experience, favicon, intro, skills } = this.state.images;
          if (Key.includes('contact')) {
            contact.push(image);
          } else if (Key.includes('experience')) {
            experience.push(image);
          } else if (Key.includes('favicon')) {
            favicon.push(image);
          } else if (Key.includes('intro')) {
            intro.push(image);
          } else if (Key.includes('skills')) {
            skills.push(image);
          }
        })
      })
      .catch(err => (
        console.log(err)
      ))
  }

  render() {
    const images = this.state.images;
    return (
      <Fragment>
        {this.state.images ? (
          <div className="app">
            <Fragment>
              <Nav images={images.intro}/>
            </Fragment>
            <Fragment>
              <Main images={images}/>
            </Fragment>
          </div>
        ) : (
          null
        )}
      </Fragment> 
    )
  }
}
