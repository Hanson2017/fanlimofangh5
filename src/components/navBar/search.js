import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';

export default class NavBar extends React.Component {
    render() {
        const { title, history } = this.props;
        return (
            <div className='navBarContainer'>
                <div className='back' onClick={() => history.goBack()}>
                    {
                        this.props.back === 'null' ?
                            null
                            :
                            <Icon type={require('../../../src/assets/icons/left.svg')} size={'xxs'} color={'#fff'} />
                    }
                </div>
                {
                    title == '' ?
                        <div className='homeSearchBar' onClick={() => { history.push('/search') }}>
                            <Icon type={require('../../../src/assets/icons/search.svg')} size={'xxs'} color={'#999'} />
                            <span> 搜索你感兴趣的平台活动</span>
                        </div>
                        :
                        <div className='title'>
                            {title}
                        </div>
                }
                <div className='operation'>{this.props.children ? this.props.children : null}</div>
            </div>
        )
    }
}