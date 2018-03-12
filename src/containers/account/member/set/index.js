import React, { Component } from 'react';
import { Icon, Toast } from 'antd-mobile';
import Api from '../../../../utils/api';
import Util from '../../../../utils/util';
import FormValidation from '../../../../utils/formValidation';
import Loading from '../../../../components/loading';
import NavBar from '../../../../components/navBar';

import Submit from '../../../../components/submit/bottomSubmit';
import InputList from './inputList';
import './index1.scss';

export default class Set extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            listdata: [],
            alipay: '',
            alipayName: '',
            len: 1,
            ref: false,
            loading: true
        }
    }
    render() {
        return (
            <div className='container'>
                <NavBar title={'快捷设置'} history={this.props.history}>
                    <a className='add' onClick={this.addInputForm.bind(this)}>新增 </a>
                </NavBar>
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className='userSetContainer'>
                            <div className='form'>
                                <InputList labelText={'支付宝帐号(用于接收返利)'} handleChange={this.handleChange} params={{ value: this.state.alipay, type: "text", name: "alipay" }} />
                                <InputList labelText={'支付宝帐号对应的真实姓名'} handleChange={this.handleChange} params={{ value: this.state.alipayName, type: "text", name: "alipayName" }} />
                            </div>
                            {
                                this.state.listdata.map((item, i) => {
                                    return (
                                        this.renderGroupItem(item, i)
                                    )
                                })
                            }
                            <Submit value={'提交保存'} onSubmit={this.onSubmit.bind(this)} />
                        </div>
                }

            </div>
        )
    }
    renderGroupItem(data, i) {
        const listData = this.state.listdata[i];
        return (
            <div className='list' key={i}>
                <div className='hd'>
                    <span>快捷设置{i + 1}</span>
                    <div className='del' onClick={this.deleteInputForm.bind(this, i)}>
                        <Icon type={require('../../../../assets/icons/delete.svg')} size={'xxs'} color={'#ccc'} />
                        <b>删除</b>
                    </div>
                </div>
                <div className='form'>
                    <InputList labelText={'常用注册手机号'} handleChange={(e) => {
                        listData.c_phone = e.target.value
                        this.setState({
                            ref: !this.state.ref
                        })
                    }}
                        params={{ type: "text", value: data.c_phone, maxLength: '11' }} />
                    <InputList labelText={'平台实名认证对应真实姓名'} handleChange={(e) => {
                        listData.c_username = e.target.value
                        this.setState({
                            ref: !this.state.ref
                        })
                    }}
                        params={{ type: "text", value: data.c_username }} />
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        const that = this;
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const url = Api.memberSet + memberId;
        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    const len = response.data.listdata.length

                    that.setState({
                        listdata: response.data.listdata,
                        alipay: response.data.alipayid,
                        alipayName: response.data.alipayname,
                        len: len,
                        loading:false
                    })
                }
                else {
                    console.log(response.resultmsg)
                }

            });
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    addInputForm() {
        var that = this;
        this.state.listdata.push(
            {
                id: 0,
                c_userid: '',
                c_phone: '',
                c_username: ''
            }
        )
        this.setState({
            len: this.state.len + 1
        })

        setTimeout(() => {
            window.scrollTo(0, 140 * this.state.len);
        }, 300)
    }
    deleteInputForm(index) {

        this.state.listdata.splice(index, 1)

        this.setState({
            len: this.state.len - 1,
        })

    }
    onSubmit() {
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const listdata = this.state.listdata;
        const alipayid = this.state.alipay;
        const alipayname = this.state.alipayName;

        if (FormValidation.empty(alipayid, '支付宝账号不能为空') == false) {
            return;
        }
        if (FormValidation.empty(alipayname, '支付宝账号对应真实姓名不能为空') == false) {
            return;
        }
        for (let j = 0; j < listdata.length; j++) {
            if (FormValidation.phoneValid(listdata[j].c_phone, '快捷设置' + (j + 1) + ':') == false) {
                return;
            }
        }

        const formData = new FormData();

        for (let i = 0; i < listdata.length; i++) {
            formData.append('listdata' + '[' + i + ']' + '.id', listdata[i].id);
            formData.append('listdata' + '[' + i + ']' + '.c_userid', listdata[i].c_userid);
            formData.append('listdata' + '[' + i + ']' + '.c_phone', listdata[i].c_phone);
            formData.append('listdata' + '[' + i + ']' + '.c_username', listdata[i].c_username);
        }
        formData.append("memberid", memberId);
        formData.append("alipayid", alipayid);
        formData.append("alipayname", alipayname);

        const opt = {
            method: 'POST',
            body: formData
        }

        const url = Api.memberModSet;

        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    Toast.success('提交成功', 1)
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }

            });
    }

}