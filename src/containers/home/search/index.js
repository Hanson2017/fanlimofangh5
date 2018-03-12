import React, { Component } from 'react';
import { Icon, Carousel } from 'antd-mobile';

import './index1.scss';

export default class Search extends React.Component {
    render() {
        const history=this.props.history;
        return (
            <div className='homeSearchBar' onClick={()=>{history.push('/search')}}>
                <Icon type={require('../../../assets/icons/search.svg')} size={'xxs'} color={'#999'} />
                <span> 搜索你感兴趣的平台活动</span>
            </div>
        )
    }
}