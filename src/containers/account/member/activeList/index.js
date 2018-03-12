import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListView, Modal, Toast } from 'antd-mobile';
import Api from '../../../../utils/api';
import Util from '../../../../utils/util';
import Loading from '../../../../components/loading';
import NavBar from '../../../../components/navBar';
import Loadmore from '../../../../components/loadmore';
import './index1.scss';


class Item extends Component {
    render() {
        const { data, that } = this.props;
        const comment_field = data.activity.comment_field;
        return (
            <dd>
                <div className='item hd'>
                    <span className='ic1 c666'>{data.plat.platname}</span>
                    <span className='ic2 c666'>
                        {data.activity.isrepeat === 0 ?
                            '首投'
                            :
                            '复投'
                        }
                    </span>
                    <span className={data.comment.status === 0 ? 'ic3' : data.comment.status === 1 ? 'ic4 darkgreen' : 'ic4 red'}>
                        {
                            data.comment.status === 0 ?
                                '待审核'
                                :

                                data.comment.status === 1 ?
                                    '已通过' + '（' + data.comment.paymoney + '元' + '）'
                                    :
                                    '已驳回' + '（' + data.comment.checkinfo + '）'

                        }
                    </span>
                    {
                        data.comment.status === 0 ?
                            <span className='ic4'>
                                <Link to={{ pathname: '/member/active/edit', state: { id: data.comment.id, comment_field: data.activity.comment_field } }} className='link'>编辑</Link>
                                <a className='link del' onClick={(e) => {
                                    e.preventDefault();
                                    Modal.alert('删除', '确定删除本条回帖信息么?', [
                                        { text: '取消', onPress: () => console.log('cancel') },
                                        { text: '确定', onPress: () => { that.delComment(data.comment.id) } },
                                    ])
                                }}>删除</a>
                            </span>
                            :
                            null
                    }

                </div>

                <ul className='bd'>
                    {
                        comment_field.indexOf('c_userid') >= 0 ?
                            <li>
                                <label>注册ID</label>
                                {data.comment.c_userid}
                            </li>
                            :
                            null
                    }
                    {
                        comment_field.indexOf('c_phone') >= 0 ?
                            <li>
                                <label>注册手机号</label>
                                {data.comment.c_phone}
                            </li>
                            :
                            null
                    }
                    {
                        comment_field.indexOf('c_username') >= 0 ?
                            <li>
                                <label>真实姓名</label>
                                {data.comment.c_username}
                            </li>
                            :
                            null
                    }
                    <li>
                        <label>投资方案</label>
                        第{data.comment.periodnumber}期,方案{data.comment.plannumber}
                    </li>
                    {
                        comment_field.indexOf('investdate') >= 0 ?
                            <li>
                                <label>投资日期</label>
                                {Util.formatDate(data.comment.investdate)}
                            </li>
                            :
                            null
                    }
                    <li>
                        <label>支付宝账号</label>
                        {data.comment.alipayid}
                    </li>

                    {
                        data.comment.status !== 0 ?
                            null
                            :
                            <li>
                                <label>预计返利</label>
                                <b>{data.plan.mfrebate}元</b>
                            </li>
                    }
                    {
                        data.comment.status !== 0 ?
                            null
                            :
                            <li className='w100'>
                                <label>预计返利日</label>
                                {
                                    data.plan.repaydayelse != null && data.plan.repaydayelse != '' ?
                                        data.plan.repaydayelse
                                        :
                                        data.plan.repayday === 0 ?
                                            '当日返现（周末和节假日顺延）'
                                            :
                                            data.plan.repaydaytype === 0 ?
                                                '自' + Util.formatDate(data.comment.addtime) + '起' + data.plan.repayday + '个工作日内'
                                                :
                                                '自' + Util.formatDate(data.comment.addtime) + '起' + data.plan.repayday + '个自然日内'
                                }
                            </li>
                    }

                </ul>
                {
                    data.comment.status !== 0 ?
                        null
                        :
                        <p className='note'>
                            备注：
                            {data.plan.repaydayelse != null && data.plan.repaydayelse != '' ?

                                '自' + Util.formatDate(data.comment.addtime) + '起' + data.plan.repaydayelse + '返利之前，审核状态可能为“待审核”，请耐心等待'
                                :
                                data.plan.repayday === 0 ?
                                    Util.formatDate(data.comment.addtime) + '当日24:00返现之前，审核状态可能为“待审核”，请耐心等待'
                                    :
                                    data.plan.repaydaytype === 0 ?
                                        '自' + Util.formatDate(data.comment.addtime) + '起' + data.plan.repayday + '个工作日内，审核状态可能为“待审核”，请耐心等待'

                                        :
                                        '自' + Util.formatDate(data.comment.addtime) + '起' + data.plan.repayday + '个自然日内，审核状态可能为“待审核”，请耐心等待'
                            }
                        </p>
                }

            </dd>
        )
    }
}

export default class ActiveList extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            loading: true,
            dataSource: dataSource.cloneWithRows({}),
            dataSource2: [],
            pageCount: 1,
            pageSize: 20,
            totalNum: 0,
            isLoadMore: false,
            isLoadMoreOver: false,
            ref: false,
        };
    }
    render() {
        return (
            <div className='container'>
                <NavBar title={'活动记录'} history={this.props.history} />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <div className='memberActiveList'>
                            <dl>
                                <dt className='item'>
                                    <span className='ic1'>活动平台</span>
                                    <span className='ic2'>类型</span>
                                    <span className='ic3'>状态</span>
                                    <span className='ic4'>操作</span>
                                </dt>
                                <ListView ref="lv"
                                    dataSource={this.state.dataSource}
                                    renderFooter={this.renderFooter.bind(this)}
                                    renderRow={this.renderRow.bind(this)}
                                    className="list"
                                    pageSize={4}
                                    useBodyScroll
                                    scrollRenderAheadDistance={500}
                                    scrollEventThrottle={200}
                                    onEndReached={this.onEndReached.bind(this)}
                                    onEndReachedThreshold={10}
                                />
                            </dl>
                        </div>
                }

            </div>
        )
    }
    renderRow(rowData, sectionID, rowID) {
        return (
            <Item data={rowData} index={rowID} that={this} />
        )
    }
    renderFooter() {
        return (
            <Loadmore isLoadMore={this.state.isLoadMore} isLoadMoreOver={this.state.isLoadMoreOver} />
        )
    }
    onEndReached() {
        if (this.state.totalNum > this.state.pageSize) {
            this.getData(2)
        }
    }
    componentDidMount() {
        this.getData(1)
    }
    getData(type) {
        const that = this;
        const pageCount = this.state.pageCount;

        if (type == 1) {
            this.page = 1;
            this.setState({
                loading: true,
                dataSource2: []
            })
        }
        else if (type == 2) {
            if (pageCount > this.page) {
                this.page++;
                this.setState({
                    isLoadMore: true,
                })
            }
            else {
                this.setState({
                    isLoadMoreOver: true,
                })
                return;
            }

        }
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const url = Api.getmemberlist + '?memberid=' + memberId + '&page=' + this.page + '&pagesize=' + this.state.pageSize;

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {

                    let dataSource = that.state.dataSource2;
                    dataSource = dataSource.concat(response.data);

                    that.setState({
                        loading: false,
                        isLoadMore: false,
                        dataSource: that.state.dataSource.cloneWithRows(dataSource),
                        dataSource2: dataSource,
                        pageCount: response.pageCount,
                        totalNum: response.totalNum
                    })
                }
            });
    }
    delComment(commentid) {
        const that = this;
        const loginState = JSON.parse(localStorage.loginState);
        const memberId = loginState.r_id;
        const url = Api.memberdelcomment + '?memberid=' + memberId + '&commentid=' + commentid;

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    Toast.success('删除成功', 1)
                    that.getData(1)
                }
                else {
                    Toast.fail(response.resultmsg, 1)
                }
            });

    }
}