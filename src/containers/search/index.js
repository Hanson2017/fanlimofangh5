import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import Header from './header';
import List from './list';
import Api from '../../utils/api';
import './index1.scss';
var height = document.documentElement.clientHeight || document.body.clientHeight;

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            searchList: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        const history = this.props.history;
        return (
            <div className='searchContainer' style={{ height: height }}>
                <Header history={history} that={this} />
                <List searchList={this.state.searchList} searchKey={this.state.searchKey} />
            </div>
        )
    }
    handleChange(value) {
        this.setState({
            searchKey: value
        });
        if (value != '') {
            this.getSearch(value);
        }
        else {
            this.setState({
                searchList: []
            });
        }
    }
    getSearch(keywords) {
        var that = this;
        var url = Api.searchJson + '?opnum=100' + '&keywords=' + keywords;

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
                        searchList: response.data
                    });
                }
            });
    }
    onSubmit() {
        var history = this.props.history;
        var searchKey = this.state.searchKey;
        var searchList = this.state.searchList;

        if (searchKey !== '') {
            if (searchList.length > 0) {
                if (searchList.length == 1) {
                    history.push('/Activity/Detail/' + searchList[0].id);
                }
                else if (searchList.length > 1) {
                    var location = { pathname: '/search/result', state: { searchKey: searchKey } };
                    history.push(location);
                }
            }
            else {
                Toast.fail('您搜索的平台不存在', 1);
            }
        }
        else {
            Toast.fail('请输入你关心平台的名称', 1);
        }
    }
}