import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

export default class Header extends Component {
    render() {
        const { keywords, history } = this.props;
        return (
            <div className='searchHeaderContainer'>
                <a className='cancel back' onClick={(e) => {
                    e.preventDefault()
                    history.goBack()
                }}>
                    <Icon type={require('../../../../assets/icons/left.svg')} size={'xxs'} color={'#fff'} />
                </a>
                <div className='searchInput' onClick={() => history.goBack()}>
                    <Icon type={require('../../../../assets/icons/search.svg')} size={'xxs'} color={'#999'} />
                    <span className='text'>{keywords}</span>
                </div>

            </div>
        )
    }
}