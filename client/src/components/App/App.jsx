import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Main from '../Main/Main.jsx';
import Nav from '../Nav/Nav.jsx';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadComplete: false,
      element: '',
    }
  }

  componentDidMount() {
    axios.get('/images')
      .then(async res => {
        let images = {
          contact: [],
          experience: [],
          favicon: [],
          intro: [],
          skills: [],
          construction: [],
          education: [],
        };
        res.data.forEach((image, index) => {
          const { Key } = image;
          const imageKeys = Object.keys(images);
          // See if there is a substring after the last slash
          if (Key.substring(Key.lastIndexOf('/') + 1)) {
            const url = `https://brian-portfolio.s3.amazonaws.com/${Key}`;
            image.url = url;
            imageKeys.forEach(key => {
              if (Key.includes(key)) {
                images[key].push(image);
                return;
              }
            })
          }

          if (index === res.data.length - 1) {
            this.setState({
              images: images,
              uploadComplete: true
            });
          }
        })
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  handleSubmit = email => {
    axios.post('/email', email)
      .then(async emailInfo => {
        return await emailInfo.data.accepted[0]
      })
      .catch(err => { throw new Error(err) })
  }

  render() {
    const { images } = this.state;
    return (
      <Fragment>
        {this.state.uploadComplete ? (
          <div className="app">
            <Fragment>
              <Nav images={images.intro}/>
            </Fragment>
            <Fragment>
              <Main images={images} handleSubmit={this.handleSubmit}/>
            </Fragment>
          </div>
        ) : (
          null
        )}
      </Fragment> 
    )
  }
}
