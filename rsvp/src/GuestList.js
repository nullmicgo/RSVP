import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
    <ul>
        {props.guests.map((guest,index) =>
            <Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} />            
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired
}
export default GuestList;

