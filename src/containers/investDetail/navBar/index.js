import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';

export default class NavBar extends React.Component {
    render() {
        const history = this.props.history;
        return (
            <div className='detailHeader'>
                <div className='back' onClick={() => history.goBack()}>
                    <Icon type={require('../../../assets/icons/back.svg')} color={'#a9a9a9'} size={'md'} />
                </div>
                <div className='logo'>
                    {
                        this.props.uri ?
                            <img src={this.props.uri} />
                            :
                            null
                    }

                </div>
            </div>
        )
    }
}
