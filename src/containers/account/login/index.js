import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal } from 'antd-mobile';
import NavBar from '../../../components/navBar';
import './index1.scss';

const height = document.documentElement.clientHeight || document.body.clientHeight;
const alertShow = Modal.alert;

export default class Account extends React.Component {
    render() {
        var QQUrl = encodeURI("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101346676&redirect_uri=http://test.fanlimofang.com/member/login/qqlogin&state=flmf");
        return (
            <div className='container' style={{ height: height }}>
                <NavBar title={'用户登录'} back={'null'} />
                <div className='loginContainer'>
                    <div className='logo'>
                        <img src={require('../../../assets/images/logo.png')} />
                    </div>
                    <div className='con'>
                        <a className='link' href={QQUrl}> <Icon type={require('../../../assets/icons/qq.svg')} size={'lg'} color={'#45b7ee'} /></a>
                        <a className='link wechat' onClick={() => {
                            alertShow('提示', '暂不支持微信登陆，请前往下载APP', [{
                                text: '取消', onPress: function onPress() {
                                    return console.log('cancel');
                                }
                            }, {
                                text: '确认', onPress: function onPress() {
                                    window.open('http://a.app.qq.com/o/simple.jsp?pkgname=org.zywx.wbpalmstar.widgetone.uex11575732');
                                }
                            }]);
                        }}> <Icon type={require('../../../assets/icons/wechat.svg')} size={'lg'} color={'#00d10d'} /></a>
                    </div>
                    <div className='other'>
                        <Link to={'/member/login/other'}>其他方式登录</Link>
                    </div>
                </div>
            </div>
        )
    }
}