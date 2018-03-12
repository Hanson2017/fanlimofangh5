import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import Api from '../../utils/api';
import Loading from '../../components/loading';
import TabBar from '../../components/tabBar';
import Item from '../../components/item';
import Loadmore from '../../components/loadmore';

export default class FirstInvest extends React.Component {
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
            pageSize: 10,
            totalNum: 0,
            isLoadMore: false,
            isLoadMoreOver: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.props.type) {
            this.getData(1, nextProps.type)
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <Loading />
                        :
                        <ListView ref="lv"
                            dataSource={this.state.dataSource}
                            renderFooter={this.renderFooter.bind(this)}
                            renderRow={this.renderRow}
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
            <Item data={rowData} />
        )
    }
    renderFooter() {
        return (
            <Loadmore isLoadMore={this.state.isLoadMore} isLoadMoreOver={this.state.isLoadMoreOver} />
        )
    }
    onEndReached() {
        if (this.state.totalNum > this.state.pageSize) {
            this.getData(2, this.props.type)
        }
    }
    componentDidMount() {
        this.getData(1, this.props.type)
    }
    getData(type, tabType) {
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
        var url;

        if (this.props.tType && this.props.tType == 'listTag') {
            url = Api.listTag + '?type=' + tabType + '&page=' + this.page + '&pagesize=' + this.state.pageSize;
        }
        else{
            url = Api.list + '?type=' + tabType + '&page=' + this.page + '&pagesize=' + this.state.pageSize;
        }

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
}