import React, { Component } from 'react';
import Proptypes from 'prop-types';

const GuestList = props =>
    <ul>
        {props.guests.map((guest,index) =>
            <li key={index}>
            <span>{guest.name}</span>
            <label>
                <input type="checkbox" checked={guest.isConfirmed} /> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
            </li>
        )}
    </ul>;

GuestList.propTypes = {
    guests: Proptypes.array.isRequired
}

export default GuestList;