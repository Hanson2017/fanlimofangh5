import React, { Component } from 'react';
import Util from '../../utils/util';
import NavBar from '../../components/navBar';
import TabBar from '../../components/tabs';

import NewUser from './newUser';
import Helplist from './helplist';

export default class Help extends React.Component {
    constructor() {
        super()
        this.state = {
            fixed: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount() {
        var location = this.props.location;
        this.setState({
            tabIndex: location.state && location.state.tabId ? location.state.tabId : 0
        });
    }
    render() {
        return (
            <div className='tabContainer'>
                <NavBar title={'帮助中心'} back='null' history={this.props.history} />
                <TabBar current={this.state.tabIndex} fixed={this.state.fixed}>
                    <NewUser name={'新手指南'} />
                    <Helplist name={'常用问答'} />
                </TabBar>
            </div>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        Util.handleScroll(this)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}