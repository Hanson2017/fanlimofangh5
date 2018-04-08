import React, { Component } from 'react';
import {Icon } from 'antd-mobile';
import './index1.scss';

export default class Title extends React.Component {
    render() {
        const {isFixed} = this.props;
        return (
            <div className={isFixed?'titleContainerDetail fixed':'titleContainerDetail'}>
                {this.props.title}
            </div>
        )
    }
}
