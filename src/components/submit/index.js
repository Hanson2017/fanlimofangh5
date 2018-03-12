import React, { Component } from 'react';
import './index1.scss';


export default class Submit extends Component {
    render() {
        const { value,onSubmit } = this.props;
        return (
            <button className='submitCom' onClick={onSubmit}>{value}</button>
        )
    }
}