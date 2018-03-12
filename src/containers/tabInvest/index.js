import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

import NavBar from '../../components/navBar';
import TabBar from '../../components/tabBar';
import List from '../listInvest';

import './index1.scss';

export default class TabInvest extends React.Component {
    componentWillMount() {
        var location = this.props.location;
        this.setState({
            selectedSegmentIndex: location.state && location.state.tabId ? location.state.tabId : 0
        });
    }
    render() {
        var typeName = 'dae';

        switch (this.state.selectedSegmentIndex) {
            case 0:
                typeName = 'dae';
                break;
            case 1:
                typeName = 'xiaoe';
                break;
            case 2:
                typeName = 'gaofan';
                break;
            case 3:
                typeName = 'cunguan';
                break;
            case 4:
                typeName = 'rongzi';
                break;
            case 5:
                typeName = 'guozi';
                break;
            case 6:
                typeName = 'shangshi';
                break;

        }
        return (
            <div className='tabInvestContainer'>
                <NavBar title={''} history={this.props.history} />
                <div className='investTabBar'>
                    <TabBar that={this} selectedIndex={this.state.selectedSegmentIndex} values={['大额', '小额', '高返', '存管', '融资', '国资', '上市']} />
                </div>
                <List tType={'listTag'} type={typeName} />
            </div>
        )
    }
}