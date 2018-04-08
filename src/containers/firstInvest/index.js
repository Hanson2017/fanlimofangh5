import React, { Component } from 'react';
import NavBar from '../../components/navBar';
import TabBar from '../../components/tabs';
import List from '../listInvest';
import Util from '../../utils/util';

const tabNames = [
    { title: '进行中', type: 'first' },
    { title: '已结束', type: 'firstover' },
]

export default class FirstInvest extends React.Component {
    constructor() {
        super()
        this.state = {
            fixed: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    render() {
        return (
            <div className='tabContainer'>
                <NavBar title={''} back='null' history={this.props.history} />
                <TabBar fixed={this.state.fixed}>
                    {
                        tabNames.map((item, i) => {
                            return (
                                <List name={item.title} key={i} type={item.type} />
                            )
                        })
                    }
                </TabBar>
            </div>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll() {
        Util.handleScroll(this)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }
}