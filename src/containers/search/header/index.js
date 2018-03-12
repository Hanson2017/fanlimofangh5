import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';
export default class Header extends React.Component {
    render() {
        const { history, that } = this.props;
        return (
            <div className='searchHeaderContainer'>
                <div className='searchInput'>
                    <Icon type={require('../../../assets/icons/search.svg')} size={'xxs'} color={'#999'} />
                    <input type='search' className='text' placeholder={'搜索你感兴趣的平台活动'} onChange={this.handleChange.bind(this)} autoFocus="autoFocus" onKeyUp={
                        (e) => {
                            e.keyCode === 13 && this.handleSubmit()
                        }} />
                </div>
                <a className='cancel' onClick={(e) => {
                    e.preventDefault()
                    history.goBack()
                }}>取消</a>
            </div>
        )
    }
    handleChange(event) {
        const { that } = this.props;
        that.handleChange(event.target.value)
    }
    handleSubmit(){
        this.props.that.onSubmit()
    }
}