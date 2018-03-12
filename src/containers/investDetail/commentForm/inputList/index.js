import React, { Component } from 'react';

export default class InputList extends Component {
    render() {
        const { labelText, params } = this.props;
        return (
            <li>
                <label>{labelText}</label>
                <input {...params} className='text' onChange={this.props.handleChange} />
            </li>
        )
    }
}