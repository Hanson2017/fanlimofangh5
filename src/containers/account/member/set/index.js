import React, { Component } from 'react';
import { Icon, Toast, Modal } from 'antd-mobile';
import Api from '../../../../utils/api';
import Util from '../../../../utils/util';
import FormValidation from '../../../../utils/formValidation';
import Loading from '../../../../components/loading';
import NavBar from '../../../../components/navBar';

import InputList from './inputList';
import './index1.scss';

export default class Set extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            loading: true,
            memberId: null,
            alipay: '',
            alipayName: '',
            alipayForm: '',
            alipayNameForm: '',
            editAlipay: false,
            listdata: [],
            listdataForm: [],
            editList: [],
            listdataAdd: {
                id: 0,
                c_phone: '',
                c_username: ''
            },
            addisHidden: true,
            ref: false,
        }
    }
    componentWillMount() {
        this.setState({
            memberId: JSON.parse(localStorage.loginState).r_id
        })
    }
    render() {
        return (
            <div className='container'>
                <NavBar title={'快捷设置'} history={this.props.history} />

                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className='userSetContainer'>
                            <div className='alipayForm'>
                                <div className='header'>
                                    <span className='tit'>支付宝账号设置</span>
                                    {
                                        this.state.editAlipay ?
                                            null
                                            :
                                            <span className='edit' onClick={this.editAlipay.bind(this)}>编辑</span>
                                    }
                                </div>
                                {
                                    this.state.editAlipay ?
                                        <div>
                                            <ul className='commentsForm'>
                                                <InputList labelText={'支付宝帐号'} handleChange={this.handleChange} params={{ value: this.state.alipayForm, type: "text", name: "alipayForm" }} />
                                                <InputList labelText={'真实姓名'} handleChange={this.handleChange} params={{ value: this.state.alipayNameForm, type: "text", name: "alipayNameForm" }} />
                                            </ul>
                                            <div className='btnContainer'>
                                                <a className='cancel' onClick={this.cancelAlipay.bind(this)}>取消</a>
                                                <a className='submit' onClick={this.submitAlipay.bind(this)}>保存</a>
                                            </div>

                                        </div>
                                        :
                                        <dl>
                                            <dd className='list'>
                                                <label>支付宝帐号</label>
                                                {this.state.alipay}
                                            </dd>
                                            <dd className='list'>
                                                <label>真实姓名</label>
                                                {this.state.alipayName}
                                            </dd>
                                        </dl>
                                }
                            </div>
                            <div className='infoList mt20'>
                                <div className='header'>
                                    <span className='tit'>个人平台信息</span>
                                    {
                                        this.state.addisHidden ?
                                            <span className='add' onClick={this.addSet.bind(this)}>新增设置</span>
                                            :
                                            null
                                    }

                                </div>
                                {
                                    this.state.addisHidden ?
                                        null
                                        :
                                        <div className='addformList'>
                                            <div className='hd'>
                                                <span className='tit'>快捷设置</span>
                                            </div>
                                            <ul className='commentsForm'>
                                                <InputList labelText={'常用手机号'} handleChange={(e) => {
                                                    this.state.listdataAdd.c_phone = e.target.value
                                                    this.setState({
                                                        ref: !this.state.ref
                                                    })
                                                }}
                                                    params={{ type: "text", value: this.state.listdataAdd.c_phone, maxLength: '11' }} />
                                                <InputList labelText={'真实姓名'} handleChange={(e) => {
                                                    this.state.listdataAdd.c_username = e.target.value
                                                    this.setState({
                                                        ref: !this.state.ref
                                                    })
                                                }}
                                                    params={{ type: "text", value: this.state.listdataAdd.c_username }} />
                                            </ul>
                                            <div className='btnContainer'>
                                                <a className='cancel' onClick={this.cancelAdd.bind(this)}>取消</a>
                                                <a className='submit' onClick={this.submitAdd.bind(this)}>保存</a>
                                            </div>
                                        </div>

                                }
                                {
                                    this.state.listdata.length == 1 && this.state.listdata[0].id==0?
                                    <div className='null'>暂无设置</div>
                                    :
                                    this.state.listdata.map((item, i) => {
                                        const isEdit = this.state.editList[i];
                                        const dataForm = this.state.listdataForm[i];
                                        return (
                                            <div>
                                                {
                                                    isEdit ?
                                                        <div className='addformList'>
                                                            <div className='hd'>
                                                                <span className='tit'>快捷设置 {i + 1}</span>
                                                            </div>
                                                            <ul className='commentsForm'>
                                                                <InputList labelText={'常用手机号'} handleChange={(e) => {
                                                                    dataForm.c_phone = e.target.value
                                                                    this.setState({
                                                                        ref: !this.state.ref
                                                                    })
                                                                }}
                                                                    params={{ type: "text", value: dataForm.c_phone, maxLength: '11' }} />
                                                                <InputList labelText={'真实姓名'} handleChange={(e) => {
                                                                    dataForm.c_username = e.target.value
                                                                    this.setState({
                                                                        ref: !this.state.ref
                                                                    })
                                                                }}
                                                                    params={{ type: "text", value: dataForm.c_username }} />
                                                            </ul>
                                                            <div className='btnContainer'>
                                                                <a className='cancel' onClick={this.cancelSet.bind(this, i)}>取消</a>
                                                                <a className='submit' onClick={this.submitSet.bind(this, i)}>保存</a>
                                                            </div>
                                                        </div>
                                                        :
                                                        <dl>
                                                            <dt className='hd'>
                                                                <span className='tit'>快捷设置 {i + 1}</span>
                                                                <span className='operation'>
                                                                    <a className='edit' onClick={this.editSet.bind(this, i)}>编辑</a>
                                                                    <a className='del' onClick={this.delSet.bind(this, i)}>删除</a>
                                                                </span>
                                                            </dt>
                                                            <dd className='list'>
                                                                <label>常用手机号</label>
                                                                {item.c_phone}
                                                            </dd>
                                                            <dd className='list'>
                                                                <label>真实姓名</label>
                                                                {item.c_username}
                                                            </dd>
                                                        </dl>
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                }

            </div>
        )
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const that = this;
        const memberId = this.state.memberId;
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

                    const isHiddenNew = [];

                    for (let i = 0; i < len; i++) {
                        isHiddenNew.push(false)
                    }
                    that.setState({
                        alipay: response.data.alipayid,
                        alipayName: response.data.alipayname,
                        alipayForm: response.data.alipayid,
                        alipayNameForm: response.data.alipayname,
                        listdata: response.data.listdata,
                        listdataForm: response.data.listdata,
                        editList: isHiddenNew,
                        loading: false
                    })
                }
                else {
                    console.log(response.resultmsg)
                }

            });
    }
    editAlipay() {
        this.setState({
            editAlipay: true
        })
    }
    cancelAlipay() {
        this.setState({
            editAlipay: false
        })
    }
    submitAlipay() {
        const that = this;
        const { memberId, alipayForm, alipayNameForm } = this.state;

        if (FormValidation.empty(alipayForm, '支付宝账号不能为空') == false) {
            return;
        }
        if (FormValidation.empty(alipayNameForm, '支付宝账号对应真实姓名不能为空') == false) {
            return;
        }

        const formData = new FormData();

        formData.append("memberid", memberId);
        formData.append("alipayid", alipayForm);
        formData.append("alipayname", alipayNameForm);

        const opt = {
            method: 'POST',
            body: formData
        }

        const url = Api.memberModSet_alipay;

        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    Toast.success('修改成功', 1);
                    that.cancelAlipay()
                    that.getData();
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }
            });
    }


    editSet(i) {
        this.state.editList[i] = true;
        this.setState({
            ref: !this.state.ref
        })
    }
    cancelSet(i) {
        this.state.editList[i] = false;
        this.setState({
            ref: !this.state.ref
        })
    }
    submitSet(i) {
        const listDataForm = this.state.listdataForm[i];
        this.onSubmit(listDataForm, i)
    }
    delSet(i) {
        const that = this;
        Modal.alert('', '确定删除本条快捷设置?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => { that.del(i) } },
        ])
    }
    del(i) {
        const that = this;
        const listDataForm = this.state.listdataForm[i];
        const memberId = this.state.memberId;
        const id = listDataForm.id;

        const formData = new FormData();

        formData.append("memberid", memberId);
        formData.append("id", id);

        const opt = {
            method: 'POST',
            body: formData
        }

        const url = Api.memberModSet_contact_del;

        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    Toast.success('删除成功！', 1);
                    that.getData();
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }
            });
    }

    addSet() {
        this.setState({
            addisHidden: false
        })
    }
    cancelAdd() {
        this.setState({
            addisHidden: true,
            listdataAdd: {
                id: 0,
                c_phone: '',
                c_username: ''
            }
        })
    }
    submitAdd() {
        const listDataForm = this.state.listdataAdd;
        this.onSubmit(listDataForm)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit(data, i) {
        const that = this;
        const memberId = this.state.memberId;
        const id = data.id;
        const c_phone = data.c_phone;
        const c_username = data.c_username;

        if (FormValidation.phoneValid(c_phone) == false) {
            return;
        }

        const formData = new FormData();

        formData.append("memberid", memberId);
        formData.append("c_phone", c_phone);
        formData.append("c_username", c_username);
        formData.append("id", id);

        const opt = {
            method: 'POST',
            body: formData
        }

        const url = Api.memberModSet_contact;

        fetch(url, opt)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    Toast.success('提交成功', 1);
                    if (i) {
                        that.cancelSet(i);
                    }
                    else {
                        that.cancelAdd()
                    }

                    that.getData();
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }
            });
    }

}