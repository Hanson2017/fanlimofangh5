import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import NavBar from '../../../../components/navBar';

import Util from '../../../../utils/util';
import Api from '../../../../utils/api';
import FormValidation from '../../../../utils/formValidation';
import InputList from '../../inputList';
import Submit from '../../../../components/submit';

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    render() {
        return (
            <div className='container'>
                <NavBar title={'修改密码'} history={this.props.history} />
                <div className='formContainer'>
                    <InputList iconName={'password'} placeholder={'原始密码'} handleChange={this.handleChange} params={{ value: this.state.oldPassword, type: "password", name: "oldPassword" }} />
                    <InputList iconName={'passwordO'} placeholder={'新密码'} handleChange={this.handleChange} params={{ value: this.state.newPassword, type: "password", name: "newPassword" }} />
                    <InputList iconName={'passwordO'} placeholder={'确认新密码'} handleChange={this.handleChange} params={{ value: this.state.confirmPassword, type: "password", name: "confirmPassword" }} isBorder={'null'} />
                </div>
                <div className='submitContainer'>
                    <Submit value={'提交修改'} onSubmit={this.onSubmit} />
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
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const oldPwd = this.state.oldPassword;
        const newPwd = this.state.newPassword;
        const newconfirmPwd = this.state.confirmPassword;

        if (FormValidation.empty(oldPwd, '原始密码不能为空') == false) {
            return;
        }

        if (FormValidation.empty(newPwd, '新密码不能为空') == false) {
            return;
        }

        if (FormValidation.lengthValid(newPwd, 6, '新密码位数至少6位') == false) {
            return;
        }

        if (FormValidation.empty(newconfirmPwd, '确认新密码不能为空') == false) {
            return;
        }

        if (FormValidation.confirmPassword(newPwd, newconfirmPwd, '密码输入不一致') == false) {
            return;
        }

        const url = Api.memberModPass;

        let formData = {
            memberid: memberId,
            oldPwd: oldPwd,
            newPwd: newPwd,
            newconfirmPwd: newconfirmPwd
        }
        let opt = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
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
                    Toast.success('密码修改成功', 1)
                    history.replace('/member')
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }

            });
    }
}