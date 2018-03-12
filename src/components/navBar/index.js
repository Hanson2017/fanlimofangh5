import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';

export default class NavBar extends React.Component {
    render() {
        const { title,history } = this.props;
        return (
            <div className='navBarContainer'>
                <div className='back' onClick={()=>history.goBack()}>
                    {
                        this.props.back === 'null' ?
                            null
                            :
                            <Icon type={require('../../../src/assets/icons/back.svg')} size={'md'} color={'#a9a9a9'} />
                    }
                </div>
                <div className='title'>
                    {title}
                </div>
                <div className='operation'>{this.props.children ? this.props.children : null}</div>
            </div>
        )
    }
}