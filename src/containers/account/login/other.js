import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import NavBar from '../../../components/navBar';

import Util from '../../../utils/util';
import Api from '../../../utils/api';
import FormValidation from '../../../utils/formValidation';
import InputList from '../inputList';
import Submit from '../../../components/submit';

export default class OtherLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    render() {
        return (
            <div className='container'>
                <NavBar title={'用户登录'} history={this.props.history} />
                <div className='formContainer'>
                    <InputList iconName={'email'} placeholder={'用户名/邮箱'} handleChange={this.handleChange} params={{ value: this.state.userName, type: "text", name: "userName" }} />
                    <InputList iconName={'password'} placeholder={'密码'} handleChange={this.handleChange} params={{ value: this.state.password, type: "password", name: "password" }} isBorder={'null'} />
                </div>
                <div className='submitContainer'>
                    <Submit value={'立即登录'} onSubmit={this.onSubmit} />
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
    onSubmit() {
        const { history } = this.props;
        const that = this;
        const userName = this.state.userName;
        const password = this.state.password;

        if (FormValidation.emailVaild(userName) == false) {
            return;
        }
        if (FormValidation.empty(password, '密码不能为空') == false) {
            return;
        }

        const url = Api.login;

        let opt = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                r_email: userName,
                r_password: password,
            })
        }


        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    const result = JSON.stringify(response)
                    localStorage.loginState = result
                    history.replace('/member')
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }

            });
    }
}