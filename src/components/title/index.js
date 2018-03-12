import React, { Component } from 'react';
import {Icon } from 'antd-mobile';
import './index.scss';

export default class Title extends React.Component {
    render() {
        return (
            <div className='titleContainer'>
                <div className='line'></div>
                <div className='titleText'>{this.props.title}</div>
                <div className='line'></div>
            </div>
        )
    }
}
