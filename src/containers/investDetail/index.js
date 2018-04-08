import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import Loading from '../../components/loading';
import Header from './navBar';
import Title from './title/';
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
            userSetInfo: '',
            fixed: null,
            dateDiff:0
        };
        this.handleScroll = this.handleScroll.bind(this)
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
                <Header history={history} uri={this.state.loading ? null :  Api.domain + dataSource.acinfo.plat.platlogo} endtime={!this.state.loading && dataSource.acinfo.activity.isend === 1 && dataSource.acinfo.activity.status === 1 ?dataSource.acinfo.activity.endtime:null} dateDiff={this.state.dateDiff} />

                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className={dataSource.acinfo.activity.isrepeat == 0 ? 'firstDetailBody detailBody' : 'repeatDetailBody detailBody'}>
                            {
                                this.state.fixed ?
                                    <div className={this.state.fixed == '出借方案' ? 'plans' : null}>
                                        <Title title={this.state.fixed} isFixed={true} />
                                    </div>
                                    :
                                    null
                            }
                            <Top data={dataSource.acinfo} />
                            <div className='plans mt30' ref={'plans'}>
                                <Title title={'出借方案'} />

                                <Plans data={dataSource} that={this} />
                                <div className='planFooter' ref={'planFooter'}></div>
                            </div>

                            <Service that={this} data={{ qqgroup: dataSource.qqgroup, qqgroup_num: dataSource.qqgroup_num, qqservice: dataSource.qqservice, qqgroup_url: dataSource.qqgroup_url }} />
                            <Mianze that={this} />
                            {
                                dataSource.acinfo.activity.iscomment == 0 ?
                                    <div className='detailBox mt30'>
                                        <div className='ddView'>本活动仅做优惠信息推送，无需回复投资信息。</div>
                                    </div>
                                    :
                                    <div>
                                        {
                                            dataSource.acinfo.activity.img_att_h5 != null && dataSource.acinfo.activity.img_att_h5 != '' ?
                                                <div className='mt30'>
                                                    <Title title={'特别事项'} />
                                                    <div className='detailBox'>
                                                        <img src={Api.domain + dataSource.acinfo.activity.img_att_h5} />
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                        {
                                            dataSource.acinfo.activity.comment_pich5 ?
                                                <FindID uri={Api.domain + dataSource.acinfo.activity.comment_pich5} />
                                                :
                                                null
                                        }
                                        <div className='mt30'>
                                            <Title title={'返利回帖'} />
                                            <ReplyNote data={dataSource.acinfo.activity} />
                                        </div>

                                        {
                                            dataSource.acinfo.activity.status === 1 ?
                                                <CommentForm data={dataSource} loginState={this.state.loginState} userSetInfo={this.state.userSetInfo} that={this} history={this.props.history} />
                                                :
                                                null
                                        }
                                        <div className='mt30' ref={'comments'}>
                                            <Title title={'回帖记录'} />
                                            <div className='detailBox'>
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
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        var that = this;
        if (this.refs.plans && this.refs.planFooter && this.refs.comments) {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var planTop = this.refs.plans.offsetTop - 81;
            var planFooter = this.refs.planFooter.offsetTop - 81 - 60;
            var commentsTop = this.refs.comments.offsetTop - 81
            if (scrollTop >= planTop && scrollTop <= planFooter) {
                that.setState({
                    fixed: '出借方案'
                })
            }
            else if (scrollTop > commentsTop) {
                that.setState({
                    fixed: '回帖记录'
                })
            }
            else {
                that.setState({
                    fixed: null
                })
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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

                    var date = new Date();
                    var now = date.getTime();
                    var datenowServer = new Date(parseInt(response.datenow.replace("/Date(", "").replace(")/", "")));
                    var nowServer = datenowServer.getTime();
                    var dateDiff = nowServer - now;

                    that.setState({
                        loading: false,
                        dataSource: response.data,
                        dateDiff:dateDiff
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