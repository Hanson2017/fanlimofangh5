import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';

export default class NavBar extends React.Component {
    render() {
        const { iconName, isBorder, placeholder,params } = this.props;
        return (
            <div className={isBorder ? 'inputList ' : 'inputList inputListBt'}>
                <Icon type={require('../../../assets/icons/' + iconName + '.svg')} size={'xxs'} color={'#ccc'} />
                <input  {...params} className='text' onChange={this.props.handleChange} placeholder={placeholder} />
            </div>
        )
    }
}