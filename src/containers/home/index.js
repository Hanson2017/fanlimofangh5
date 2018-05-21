import React, { Component } from 'react';

import Api from '../../utils/api';
import Loading from '../../components/loading';
import SearchBar from './search';
import Marquee from './marquee';
import NavList from './navList';
import Group from './group';
import GroupNew from './groupNew';
import Title from '../../components/title';

import './index1.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSourceHot: [],
            dataSourceNew: [],
            dataSourceFirst: [],
            dataSourceRepeat: [],
            noticeList: [],
            fixed: null,
            dateDiff: 0
        };
        this.handleScroll = this.handleScroll.bind(this)
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
                <div className={!this.state.fixed ? 'homeContainer' : this.state.fixed == '首次出借活动' ? 'homeContainer homeContainerFirst' : 'homeContainer homeContainerRepeat'}>
                    {
                        this.state.fixed ?
                            <Title title={this.state.fixed} isFixed={true} type={''} />
                            :
                            null
                    }
                    <div className='homeTop'>
                        <div className='logo'>
                            <img src={require('../../assets/images/logo2.png')} />
                        </div>
                        <SearchBar history={history} />
                    </div>
                    <Marquee data={this.state.noticeList} />
                    <div className='banner'>
                        <img src={require('../../assets/images/banner.png')} alt="" />
                    </div>
                    <NavList history={history} />
                    <GroupNew title={'近期热门活动'} data={this.state.dataSourceHot} />
                    <GroupNew title={'最新上线活动'} data={this.state.dataSourceNew} />
                    <div ref={'groupFrist'}>
                        <Group title={'首次出借活动'} dateDiff={this.state.dateDiff} data={this.state.dataSourceFirst} type={0} />
                    </div>
                    <div ref={'groupRepeat'}>
                        <Group title={'多次出借活动'} dateDiff={this.state.dateDiff} data={this.state.dataSourceRepeat} type={1} />
                    </div>
                </div>
            )
        }

    }
    componentDidMount() {
        this.getData()
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        var that = this;
        if (this.refs.groupFrist && this.refs.groupRepeat) {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var groupFrist = this.refs.groupFrist.offsetTop - 90;
            var groupRepeat = this.refs.groupRepeat.offsetTop - 90
            if (scrollTop >= groupFrist && scrollTop <= groupRepeat) {
                that.setState({
                    fixed: '首次出借活动'
                })
            }
            else if (scrollTop > groupRepeat) {
                that.setState({
                    fixed: '多次出借活动'
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

                    var date = new Date();
                    var now = date.getTime();
                    var datenowServer = new Date(parseInt(response.datenow.replace("/Date(", "").replace(")/", "")));
                    var nowServer = datenowServer.getTime();
                    var dateDiff = nowServer - now;

                    that.setState({
                        loading: false,
                        dataSourceHot: dataSource.homerecom,
                        dataSourceNew: dataSource.homenew,
                        dataSourceFirst: dataSource.homefirst,
                        dataSourceRepeat: dataSource.homerepeat,
                        noticeList: dataSource.payuser,
                        dateDiff: dateDiff
                    })
                }
            });
    }
}