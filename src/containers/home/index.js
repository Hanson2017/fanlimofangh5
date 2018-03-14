import React, { Component } from 'react';

import Api from '../../utils/api';
import Loading from '../../components/loading';
import SearchBar from './search';
import Marquee from './marquee';
import NavList from './navList';
import Group from './group';
import GroupNew from './groupNew';

import './index1.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSourceNew: [],
            dataSourceFirst: [],
            dataSourceRepeat: [],
            noticeList: []
        };
    }
    render() {
        const history = this.props.history;
        if (this.state.loading) {
            return (
                <Loading />
            )
        }
        else {
            return (
                <div className='homeContainer'>
                    <div className='homeTop'>
                        <SearchBar history={history} />
                        <Marquee data={this.state.noticeList} />
                    </div>
                    <div className='banner'>
                        <img src={require('../../assets/images/banner.jpg')} alt="" />
                    </div>
                    <NavList history={history} />
                    <GroupNew title={'最新上线活动'} data={this.state.dataSourceNew} />
                    <Group title={'热门首次出借活动'} data={this.state.dataSourceFirst} />
                    <Group title={'热门多次出借活动'} data={this.state.dataSourceRepeat} />
                </div>
            )
        }

    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        const that = this;
        const url = Api.home
        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    const dataSource = response.data;
                    that.setState({
                        loading: false,
                        dataSourceNew: dataSource.homenew,
                        dataSourceFirst: dataSource.homefirst,
                        dataSourceRepeat: dataSource.homerepeat,
                        noticeList: dataSource.payuser
                    })
                }
            });
    }
}