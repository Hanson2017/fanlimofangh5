import React, { Component } from 'react';
import Util from '../../../../utils/util';
import './index1.scss';
function transformF(data) {
    var d = data.replace(/[\d\D]/g, '*');
    return d;
}

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: false
        }
    }
    componentWillMount() {
        const loginState = localStorage.loginState ? JSON.parse(localStorage.loginState) : false;
        this.setState({
            loginState: loginState
        })
    }
    render() {
        const { data, commentlNum, commentField } = this.props;
        const loginState = this.state.loginState;
        let c_userid;
        let c_phone;
        let c_username;
        let alipayid;
        let username;

        if (loginState && loginState.r_id > 0 && loginState.r_id === data.memberid && data.status !== 3) {
            c_userid = data.c_userid
            c_phone = data.c_phone
            c_username = data.c_username
            alipayid = data.alipayid
            username = data.username
        }
        else {
            c_userid = transformF(data.c_userid)
            c_phone = transformF(data.c_phone)
            c_username = transformF(data.c_username)
            alipayid = transformF(data.alipayid)
            username = transformF(data.username)
        }
        let addtime = Util.formatDate(data.addtime)
        let investdate = Util.formatDate(data.investdate)

        return (
            <div className='commentList'>
                <div className='hd'>
                    <div className='l'>
                        <span className='flow'>{parseInt(commentlNum)}楼</span>
                        <span className={loginState && loginState.r_id > 0 && loginState.r_id == data.memberid ?'nameL':'name'}>{username}</span>
                        {
                            loginState && loginState.r_id > 0 && loginState.r_id == data.memberid ?
                                null
                                :
                                <span className=''>(回帖已加密)</span>
                        }
                    </div>
                    <div className='r'>{addtime}</div>
                </div>
                <div className='bd'>
                    {
                        commentField.indexOf('c_userid') >= 0 ?
                            <span>注册ID：{c_userid}</span>
                            :
                            null
                    }
                    {
                        commentField.indexOf('c_phone') >= 0 ?
                            <span>注册手机号码：{c_phone}</span>
                            :
                            null
                    }
                    {
                        commentField.indexOf('c_username') >= 0 ?
                            <span>真实姓名：{c_username}</span>
                            :
                            null
                    }
                    <span>方案：{data.plannumber}(第{data.periodnumber}期)</span>
                    {
                        commentField.indexOf('investdate') >= 0 ?
                            <span>投资日期：{investdate}</span>
                            :
                            null
                    }
                    <span>支付宝账号：{alipayid}</span>
                </div>
            </div>
        )
    }
}