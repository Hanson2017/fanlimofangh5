import React, { Component } from 'react';
import TabBar from '../../components/tabBar';
import NewUser from './newUser';
import Helplist from './helplist';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSegmentIndex: 0
        };
    }
    render() {
        return (
            <div>
                <div className='investTabBar'>
                    <TabBar that={this} values={['新手指南', '常用问答']} />
                </div>
                {
                    this.state.selectedSegmentIndex === 0 ?
                        <NewUser />
                        :
                        <Helplist />
                }
            </div>
        )
    }

}