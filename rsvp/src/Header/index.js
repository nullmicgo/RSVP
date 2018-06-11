import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';


const Header = props =>
    <header>
    <h1>RSVP</h1>
    <p>A Meeting App</p>
    <GuestInputForm
     newGuestSubmitHandler={props.newGuestSubmitHandler}
     pendingGuest={props.pendingGuest}
     handleNameInput={props.handleNameInput}
     />
    </header>
  ;

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
}

export default Header;