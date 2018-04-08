import React, { Component } from 'react';
import { Toast, Modal } from 'antd-mobile';
import NavBar from '../../../../../components/navBar';
import Util from '../../../../../utils/util';
import Api from '../../../../../utils/api';
import FormValidation from '../../../../../utils/formValidation';
import Loading from '../../../../../components/loading';
import InputList from './inputList';
import PlanList from './plan';
import DateList from './date';
import Submit from '../../../../../components/submit';
import './index1.scss';
export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            planList: null,
            userid: '',
            phone: '',
            realname: '',
            plan: 1,
            investdate: '',
            alipay: '',
            loading: true,
            comment_field: '',
            id: 0,
            modal: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentWillMount() {
        const { location } = this.props;
        this.setState({
            comment_field: location.state.comment_field,
            id: location.state.id
        })
    }

    render() {
        const { history } = this.props;
        const comment_field = this.state.comment_field;
        const { comments } = this.state;
        return (
            <div className='container'>
                <NavBar title={'活动记录修改'} history={this.props.history} />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className='activeEdit'>
                            <div className='hd'>
                                {comments.platname}
                                <span className={comments.isrepeat === 0 ?'type':'type repeat'}>{comments.isrepeat === 0 ? '首次出借' : '多次出借'}</span>
                            </div>
                            <ul className='commentsForm'>
                                {
                                    comment_field.indexOf('c_userid') >= 0 ?
                                        <InputList labelText={'注册ID'} handleChange={this.handleChange} params={{ value: this.state.userid, type: "text", name: "userid" }} />
                                        :
                                        null
                                }
                                {
                                    comment_field.indexOf('c_phone') >= 0 ?
                                        <InputList labelText={'注册手机号'} handleChange={this.handleChange} params={{ value: this.state.phone, type: "text", name: "phone", maxLength: '11' }} />
                                        :
                                        null
                                }
                                {
                                    comment_field.indexOf('c_username') >= 0 ?
                                        <InputList labelText={'真实姓名'} handleChange={this.handleChange} params={{ value: this.state.realname, type: "text", name: "realname" }} />
                                        :
                                        null
                                }
                                <PlanList data={this.state.planList} that={this} plan={this.state.plan} />
                                {
                                    comment_field.indexOf('investdate') >= 0 ?
                                        <DateList that={this} date={this.state.investdate} />
                                        :
                                        null
                                }
                                <InputList labelText={'支付宝账号'} handleChange={this.handleChange} params={{ value: this.state.alipay, type: "text", name: "alipay" }} isBorder={'null'} />

                            </ul>
                            <button className='submit' onClick={this.onSubmit}>提交修改</button>
                            <Modal

                                transparent
                                maskClosable={false}
                                visible={this.state.modal}
                                onClose={this.onClose.bind(this, 'modal')}
                                footer={[{ text: '确定', onPress: () => {  history.replace('/member/active'); this.onClose('modal'); } }]}
                                platform="ios"
                            >

                                修改成功

                            </Modal>
                        </div>

                }

            </div>
        )
    }
    componentDidMount() {
        this.getData()
    }
    onClose(key) {
        this.setState({
            [key]: false,
        });
    }
    showModal(key) {
        this.setState({
            [key]: true,
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
    onSubmit() {
        const { history } = this.props;
        const that = this;
        const loginState = JSON.parse(localStorage.loginState);
        const comments = this.state.comments;
        const memberId = loginState.r_id;
        const id = comments.id;
        const activityid = comments.activityid;
        const activitynumber = comments.activitynumber;
        const alipayid = this.state.alipay;
        const data_c_userid = this.state.userid;
        const data_c_phone = this.state.phone;
        const data_c_username = this.state.realname;
        const data_activityplannumber = this.state.plan;
        const data_investdate = this.state.investdate;
        const url = Api.membermodcomment;
        const comment_field = this.state.comment_field;

        if (comment_field.indexOf('c_userid') >= 0 && FormValidation.empty(data_c_userid, '用户ID不能为空') == false) {
            return;
        }
        if (comment_field.indexOf('c_phone') >= 0 && FormValidation.phoneValid(data_c_phone) == false) {
            return;
        }

        if (comment_field.indexOf('c_username') >= 0 && FormValidation.empty(data_c_username, '真实姓名不能为空') == false) {
            return;
        }
        if (FormValidation.empty(data_activityplannumber, '活动方案不能为空') == false) {
            return;
        }
        if (comment_field.indexOf('investdate') >= 0 && FormValidation.empty(data_investdate, '投资日期不能为空') == false) {
            return;
        }
        if (FormValidation.empty(alipayid, '支付宝账号不能为空') == false) {
            return;
        }

        let formData = {
            memberid: memberId,
            id: id,
            activityid: activityid,
            activitynumber: activitynumber,
            alipayid: alipayid,
            data_c_userid: data_c_userid,
            data_c_phone: data_c_phone,
            data_c_username: data_c_username,
            data_activityplannumber: data_activityplannumber,
            data_investdate: data_investdate
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
                    that.showModal('modal');
                    // Toast.success('修改成功', 1)
                    // history.replace('/member/active')
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }

            });

    }
    getData() {
        const that = this;
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const id = this.state.id;
        const url = Api.getmembercommentRow + '?memberid=' + memberId + '&commentid=' + id;

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {

                    const comments = response.data.comment;
                    const planList = response.data.planlist;

                    that.setState({
                        comments: comments,
                        planList: planList,
                        userid: comments.data_c_userid,
                        phone: comments.data_c_phone,
                        realname: comments.data_c_username,
                        plan: comments.data_activityplannumber,
                        investdate: comments.data_investdate,
                        alipay: comments.alipayid,
                        loading: false
                    })
                }

            });
    }
}