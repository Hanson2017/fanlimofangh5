import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon } from 'antd-mobile';
import './index1.scss';
class NavList extends React.Component{
    render(){
        const {routerPath,labelText,iconName}=this.props;
        return(
            <Link to={routerPath} className='nav'>
                <span>
                    <Icon type={require('../../../assets/icons/'+iconName+'.svg')} size={'xs'} color={'#999'} />
                    <b>{labelText}</b>
                </span>
                <span> <Icon type={require('../../../assets/icons/right.svg')} size={'xxs'} color={'#999'} /></span>
            </Link>
        )
       
    }
}

export default class Member extends React.Component{
    render(){
        var loginState = JSON.parse(localStorage.loginState);
        return(
            <div className='memberContainer'>
                <div className="hd">欢迎您，{loginState.r_username}</div>
                <div className='bd'>
                    <NavList routerPath={'/member/active'} labelText={'活动记录'} iconName={'list'} />
                    {
                        loginState.r_fromtype === 'email' ?
                        <NavList routerPath={'/member/changepwd'} labelText={'修改密码'} iconName={'passwordO'} />
                        :
                        null
                    }                    
                    <NavList routerPath={'/member/set'} labelText={'快捷设置'} iconName={'quick'} />
                </div>
                <button className="logoutBtn" onClick={this.logout.bind(this)}>退出登录</button>
            </div>
        )
    }
    logout(){
        var that = this.props.that;
        localStorage.clear();
        that.setState({
            ref: !that.state.ref
        });
    }
}