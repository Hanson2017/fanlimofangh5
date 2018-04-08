import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import Util from '../../utils/util';
import NavBar from '../../components/navBar';
import TabBar from '../../components/tabs';
import List from '../listInvest';

const tabNames = [
    { title: '大额', type: 'dae' },
    { title: '小额', type: 'xiaoe' },
    { title: '高返', type: 'gaofan' },
    { title: '存管', type: 'cunguan' },
    { title: '融资', type: 'rongzi' },
    { title: '国资', type: 'guozi' },
    { title: '上市', type: 'shangshi' }
]

export default class TabInvest extends React.Component {
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
                <NavBar title={''} history={this.props.history} />
               
                <TabBar current={this.state.tabIndex}  fixed={this.state.fixed}>
                    {
                        tabNames.map((item,i)=>{
                            return(
                                <List name={item.title} key={i} tType={'listTag'} type={item.type} />
                            )
                        })
                    }
                    
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