import React, { Fragment } from 'react';
import Name from './Name/Name.jsx';
import Categories from './Categories/Categories.jsx';
import './Nav.scss';

const Nav = props => {
  const { images } = props
  const self = images[1].Key;
  return (
    <div className="nav-container">
      <Fragment>
        <Name self={self} />
      </Fragment>
      <Fragment>
        <Categories />
      </Fragment>
    </div>
  )
}

export default Nav;