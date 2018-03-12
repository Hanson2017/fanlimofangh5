import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import Loading from '../../components/loading';
import Header from './navBar';
import Top from './top';
import Plans from './plans';
import Service from './service';
import Mianze from './mianze';
import ReplyNote from './replynote';
import FindID from './findID';
import CommentForm from './commentForm';
import CommentItem from './comments/item';
import Submit from '../../components/submit/bottomSubmit';

import './index1.scss';

export default class InvestDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityid: 0,
            loading: true,
            dataSource: '',
            commentData: [],
            commentlNum: 0,
            loginState: false,
            userSetInfo: ''
        };
    }
    componentWillMount() {
        var match = this.props.match;
        this.setState({
            activityid: match.params.id,
            loginState: localStorage.loginState ? JSON.parse(localStorage.loginState) : false
        });
    }
    render() {
        const history = this.props.history;
        const dataSource = this.state.dataSource;
        return (
            <div className='detailContainer'>
                <Header history={history} uri={this.state.loading ? null : Api.domain + dataSource.acinfo.plat.platlogo} />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className='detailBody'>
                            <Top data={dataSource.acinfo} />
                            <Plans data={dataSource} />
                            <Service data={{ qqgroup: dataSource.qqgroup, qqgroup_num: dataSource.qqgroup_num, qqservice: dataSource.qqservice, qqgroup_url: dataSource.qqgroup_url }} />
                            <Mianze />
                            {
                                dataSource.acinfo.activity.iscomment == 0 ?
                                    <div className='detailBox mt10'>
                                        <div className='ddView'>本活动仅做优惠信息推送，无需回复投资信息。</div>
                                    </div>
                                    :
                                    <div>
                                        {
                                            dataSource.acinfo.activity.img_att_h5 != null && dataSource.acinfo.activity.img_att_h5 != '' ?
                                                <div className='detailBox mt10'>
                                                    <div className='ddView'>
                                                        <img src={Api.domain + dataSource.acinfo.activity.img_att_h5} />
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                        <ReplyNote data={dataSource.acinfo.activity} />
                                        {
                                            dataSource.acinfo.activity.comment_pich5 ?
                                                <FindID uri={Api.domain + dataSource.acinfo.activity.comment_pich5} />
                                                :
                                                null
                                        }

                                        {
                                            dataSource.acinfo.activity.status === 1 ?
                                                <CommentForm data={dataSource} loginState={this.state.loginState} userSetInfo={this.state.userSetInfo} that={this} />
                                                :
                                                null
                                        }
                                        <div className='detailBox mt10'>
                                            {
                                                this.state.commentData.length ? this.state.commentData.map((item, i) => {
                                                    return (
                                                        <CommentItem data={item} key={i} commentlNum={this.state.commentlNum - i} loginState={this.state.loginState} commentField={dataSource.acinfo.activity.comment_field} />
                                                    )
                                                })
                                                    :
                                                    null
                                            }
                                            {
                                                this.state.commentlNum >= 20 ?
                                                    <Link className='moreComment' to={{ pathname: '/comments/' + this.state.activityid, state: { commentField: dataSource.acinfo.activity.comment_field, loginState: this.state.loginState } }}>查看更多评论</Link>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                            }
                            {
                                dataSource.acinfo.activity.status === 1 ?
                                    <Submit value={'直达链接'} onSubmit={this.onLink.bind(this)} />
                                    :
                                    <Submit value={'已结束'} isOver={true} />
                            }
                        </div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.getData();
        this.getCommentData();
        this.getUserSetInfo();
    }
    getData() {
        var that = this;
        var url = Api.detail + '?activityid=' + this.state.activityid;
        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    that.setState({
                        loading: false,
                        dataSource: response.data
                    });
                }
            });
    }
    getCommentData() {
        var that = this;
        var memberid = 0;
        var loginState = this.state.loginState;
        if (loginState) {
            memberid = loginState.r_id;
        }
        var url = Api.comment + '?activityid=' + this.state.activityid + '&page=1&pagesize=20' + '&memberid=' + memberid;

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    that.setState({
                        commentData: response.data,
                        commentlNum: response.totalNum
                    });
                }
            });
    }
    getUserSetInfo() {
        var that = this;
        var loginState = this.state.loginState;
        if (loginState) {
            var memberId = loginState.r_id;
            var url = Api.memberSet + memberId;

            fetch(url)
                .then(function (response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(function (response) {
                    if (response.result == 1) {
                        that.setState({
                            userSetInfo: response.data
                        });
                    }
                });
        }
    }
    onLink() {
        var activity = this.state.dataSource.acinfo.activity;
        var siteUrls = activity.siteurl.split(',');
        var index = Math.floor(Math.random() * siteUrls.length);
        var siteUrl = siteUrls[index];
        var siteUrlH5 = activity.siteurl_h5;
        var acSiteUrl = siteUrlH5 ? siteUrlH5 : siteUrl;
        window.open(acSiteUrl);
    }
}