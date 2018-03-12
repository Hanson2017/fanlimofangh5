import React, { Component } from 'react';
import TabBar from '../../components/tabBar';
import List from '../listInvest';

export default class RepeatInvest extends React.Component {
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
                    <TabBar that={this} values={['进行中', '已结束']} />
                </div>
                <List type={this.state.selectedSegmentIndex === 0 ? 'repeat':'repeatover'} />
            </div>
        )
    }
   
}