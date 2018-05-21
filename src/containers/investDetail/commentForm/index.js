import React, { Component } from 'react';
import { DatePicker, List, Picker, Toast, Modal } from 'antd-mobile';

import Util from '../../../utils/util';
import Api from '../../../utils/api';
import FormValidation from '../../../utils/formValidation';
import InputList from './inputList';
import InvestDate from './investDate';
import InvestPlan from './investPlan';
import InvestPic from './investPic';
import './index1.scss';

export default class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: '',
            userID: '',
            userPhone: '',
            userRealName: '',
            investPlan: '',
            investDate: Util.setDate(new Date()),
            alipayId: '',
            investPic: '',
            loginState: false,
            userSetInfo: '',
            disabled: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitNolog = this.handleSubmitNolog.bind(this);
        
    }
    componentWillMount() {
        this.setState({
            dataSource: this.props.data,
            loginState: this.props.loginState,
            userSetInfo: this.props.userSetInfo
        })
    }
    render() {

        var acinfo = this.state.dataSource.acinfo;
        var plans = this.state.dataSource.plans;
        var comment_field = acinfo.activity.comment_field;
        var userSetInfo = this.state.userSetInfo;

        return (
            <div className='detailBox CommentFormContainer'>
                {
                    this.state.loginState ?
                        <dl className='commentsFormFill'>
                            <dt>一键填充：</dt>
                            {
                                userSetInfo.listdata && userSetInfo.listdata.length > 0 ? userSetInfo.listdata.map((item, i) => {
                                    return (
                                        <dd key={i} onClick={() => {
                                            this.setState({
                                                userPhone: item.c_phone,
                                                alipayId: userSetInfo.alipayid !== '' ? userSetInfo.alipayid : this.state.alipayId
                                            });
                                        }}>
                                            {item.c_phone}
                                        </dd>
                                    )
                                })
                                    :
                                    null
                            }
                        </dl>
                        :
                        null
                }
                <ul className='commentsForm'>
                    {
                        comment_field.indexOf('c_userid') >= 0 ?
                            <InputList labelText='注册ID' params={{ value: this.state.userID, type: "text", name: "userID", placeholder: '请输入注册ID' }} handleChange={this.handleChange} />
                            :
                            null
                    }
                    {
                        comment_field.indexOf('c_phone') >= 0 ?
                            <InputList labelText='注册手机号' params={{ value: this.state.userPhone, type: "text", name: "userPhone", maxLength: '11', placeholder: '请输入注册手机号' }} handleChange={this.handleChange} />
                            :
                            null
                    }
                    {
                        comment_field.indexOf('c_username') >= 0 ?
                            <InputList labelText='真实姓名' params={{ value: this.state.userRealName, type: "text", name: "userRealName", placeholder: '请输入真实姓名' }} handleChange={this.handleChange} />
                            :
                            null
                    }
                    <InvestPlan data={plans} that={this} ref={'investPlan'} />
                    {
                        comment_field.indexOf('investdate') >= 0 ?
                            <InvestDate that={this} />
                            :
                            null
                    }

                    {
                        comment_field.indexOf('img_invest') >= 0 ?
                            <InvestPic uri={acinfo.activity.img_invest} that={this} ref={'investPic'} />
                            :
                            null
                    }
                    <InputList labelText='支付宝账号' params={{ value: this.state.alipayId, type: "text", name: "alipayId", placeholder: '请输入收款支付宝账号' }} handleChange={this.handleChange} />
                </ul>
                <div className='commentsSubmit'>
                    {

                        <button type='submit' disabled={this.state.disabled ? false : true} className={this.state.disabled ? 'submit' : 'submit disabled'} onClick={this.state.loginState ? this.handleSubmit : this.handleSubmitNolog}>
                            {this.state.disabled ? '提交回帖' : '正在提交...'}
                        </button>

                    }

                </div>
            </div>
        )
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmitNolog() {
        var { history } = this.props;
        Modal.alert('温馨提示', '请登录后回帖！', [
            { text: '稍后', onPress: () => console.log('cancel') },
            { text: '前往', onPress: () => { history.push('/member') } },
        ])

    }
    handleSubmit() {
        var { history } = this.props;
        var that = this;
        var thatt = this.props.that;
        var dataSource = this.state.dataSource;
        var loginState = this.state.loginState;
        var memberid = 0; //用户ID 
        var username = '游客'; //登录用户名

        if (loginState) {
            memberid = loginState.r_id;
            username = loginState.r_username;
        }

        var activityid = dataSource.acinfo.activity.id; //活动ID
        var periodnumber = dataSource.acinfo.activity.number; // 期数 

        var userID = this.state.userID; //注册ID
        var userPhone = this.state.userPhone; //注册手机
        var userRealName = this.state.userRealName; //真实姓名
        var investPlan = this.state.investPlan; //投资方案
        var investDate = this.state.investDate; //投资日期
        var alipayId = this.state.alipayId; //支付宝账号
        var investPic = this.state.investPic; //投资截图

        var url = Api.addcommentmulti; //提交数据请求地址
        var comment_field = dataSource.acinfo.activity.comment_field; //需要提交的字段

        // userid 判断
        if (comment_field.indexOf('c_userid') >= 0) {
            if (FormValidation.empty(userID, '用户ID不能为空') == false) {
                return;
            }
        }
        // phone 判断
        if (comment_field.indexOf('c_phone') >= 0) {
            if (FormValidation.phoneValid(userPhone) == false) {
                return;
            }
        }
        // realname 判断
        if (comment_field.indexOf('c_username') >= 0) {
            if (FormValidation.empty(userRealName, '真实姓名不能为空') == false) {
                return;
            }
        }
        // plan 判断
        if (FormValidation.empty(investPlan, '请选择方案') == false) {
            return;
        }

        // investdate 判断
        if (comment_field.indexOf('investdate') >= 0) {
            if (FormValidation.empty(investDate, '投资日期不能为空') == false) {
                return;
            }
        }

        if (FormValidation.empty(alipayId, '支付宝账号不能为空') == false) {
            return;
        }

        // 投资截图判断
        if (comment_field.indexOf('img_invest') >= 0) {
            if (FormValidation.empty(investPic, '请上传投资截图') == false) {
                return;
            }
        }

        var formData = new FormData();

        if (comment_field.indexOf('img_invest') >= 0) {
            formData.append("img_invest1", investPic); //上传图片
        }
        else {
            formData.append("img_invest0", '');
        }

        formData.append("c_userid1", userID); // c_userid 用户注册id
        formData.append("c_phone1", userPhone); // c_phone 手机
        formData.append("c_username1", userRealName); // c_username 真实姓名
        formData.append("plannumber1", investPlan); // plannumber 方案
        formData.append("investdate1", investDate); // investdate 投资日期

        formData.append("addnum", '1'); // 
        formData.append("alipayid", alipayId); // alipayid 支付宝
        formData.append("activityid", activityid); // activityid 活动ID
        formData.append("periodnumber", periodnumber); // periodnumber 期数  
        formData.append("memberid", memberid); // memberid 用户ID 
        formData.append("username", username); // username 登录用户 

        var opt = {
            method: 'POST',
            body: formData
        };

        this.setState({
            disabled: false
        });

        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                that.setState({
                    disabled: true
                });
                if (response.result == 1) {
                    Modal.alert('回帖成功', '可在个人中心查看进度', [
                        { text: '稍后', onPress: () => console.log('cancel') },
                        { text: '前往', onPress: () => { history.push('/member/active') } },
                    ])

                    // Toast.success('回帖成功，可在个人中心查看进度。', 1);
                    that.setState({
                        userID: '',
                        userPhone: '',
                        userRealName: '',
                        investPlan: '',
                        investDate: Util.setDate(new Date()),
                        alipayId: '',
                        investPic: ''
                    });
                    thatt.getCommentData();
                    if (comment_field.indexOf('img_invest') >= 0) {
                        that.refs.investPic.clear();
                    }
                    that.refs.investPlan.clear();
                }
                else {
                    Toast.fail('回帖失败', 1);
                }
            });
    }
}