import React, { Component } from 'react';
import Proptypes from 'prop-types';

const GuestList = props =>
    <ul>
        {props.guests.map((guest,index) =>
            <li>
            <span>Nick</span>
            <label>
                <input type="checkbox" /> Confirmed
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