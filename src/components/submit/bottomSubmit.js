import React, { Component } from 'react';
import './index1.scss';


export default class Submit extends Component {
    render() {
        const { value,onSubmit } = this.props;
        return (
            <button className={this.props.isOver?'submitComBottom submitComBottomOver':'submitComBottom'} onClick={onSubmit}>{value}</button>
        )
    }
}