import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import Util from '../../../utils/util';
import './index1.scss';
const height = document.documentElement.clientHeight || document.body.clientHeight;
class NavList extends React.Component {
    render() {
        const { routerPath, labelText, iconName ,params} = this.props;
        return (
            <Link to={routerPath} className='nav' {...params}>
                <span>
                    <Icon type={require('../../../assets/icons/' + iconName + '.svg')} size={'xxs'} color={'#999'} />
                    <b>{labelText}</b>
                </span>
                <span> <Icon type={require('../../../assets/icons/right.svg')} size={'xxs'} color={'#999'} /></span>
            </Link>
        )

    }
}

export default class Member extends React.Component {
    render() {
        var loginState = JSON.parse(localStorage.loginState);
        var time = Date.parse(new Date());
        var lasttime = Date.parse(Util.formatDate(loginState.r_regtime));
        var day = parseInt((time - lasttime) / (1000 * 60 * 60 * 24));
        return (
            <div className='memberContainer' style={{ height: height }}>
                <div className='content'>
                    <div className="hd">
                        {
                            loginState.r_avatar !== null && loginState.r_avatar !== '' ?
                                <p><img src={loginState.r_avatar} className='portrait' /></p>
                                :
                                <p><img src={require('../../../assets/images/portrait.png')} className='portrait' /></p>
                        }
                        <p className='userName'>{loginState.r_username}</p>
                        <span className='date'>玩转魔方 {day} 天</span>
                    </div>
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
                    <div className='mt30'>
                        <NavList routerPath={'/member/kefu'} labelText={'联系客服'} iconName={'qq'}  />
                    </div>
                    <button className="logoutBtn" onClick={this.logout.bind(this)}>退出登录</button>
                </div>
                <div className='version'>版本号：3.0.1</div>
            </div>
        )
    }
    logout() {
        var that = this.props.that;
        localStorage.clear();
        that.setState({
            ref: !that.state.ref
        });
    }
}