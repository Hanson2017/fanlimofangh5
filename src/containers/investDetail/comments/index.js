import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import Api from '../../../utils/api';
import NavBar from '../../../components/navBar';
import Loading from '../../../components/loading';
import Loadmore from '../../../components/loadmore';
import Item from './item';
import './index1.scss';
export default class Comments extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            activityid: 0,
            commentField: '',
            loading: true,
            dataSource: dataSource.cloneWithRows({}),
            dataSource2: [],
            pageCount: 1,
            pageSize: 20,
            totalNum: 0,
            isLoadMore: false,
            isLoadMoreOver: false,
            loginState:false,
        }
    }
    componentWillMount() {
        const { match, location } = this.props;
        this.setState({
            activityid: match.params.id,
            commentField: location.state.commentField,
            loginState: location.state.loginState,
        })
    }
    render() {
        return (
            <div className='commentsContainer'>
                <NavBar title={''} history={this.props.history} />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <ListView ref="lv"
                            dataSource={this.state.dataSource}
                            renderFooter={this.renderFooter.bind(this)}
                            renderRow={this.renderRow.bind(this)}
                            className="invest-list"
                            pageSize={4}
                            useBodyScroll
                            scrollRenderAheadDistance={500}
                            scrollEventThrottle={200}
                            onEndReached={this.onEndReached.bind(this)}
                            onEndReachedThreshold={10}
                        />

                }
            </div>
        )
    }
    renderRow(rowData, sectionID, rowID) {
        return (
            <Item data={rowData} key={rowID} commentlNum={this.state.totalNum - rowID} commentField={this.state.commentField} />
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

        let memberid = 0;
        let loginState=this.state.loginState;
        if (loginState) {
            memberid = loginState.r_id;
        }

        const url = Api.comment + '?activityid=' + this.state.activityid + '&page=' + this.page + '&pagesize=' + this.state.pageSize + '&memberid=' + memberid;

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
                        totalNum: response.totalNum,
                    })
                }
            });
    }
}