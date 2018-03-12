import React, { Component } from 'react';
import { SegmentedControl } from 'antd-mobile';
import './index1.scss';

export default class TabBar extends React.Component {
    render() {
        const { values,selectedIndex } = this.props;
        return (
            <div className='tabBarContainer'>
                <SegmentedControl onChange={this.onChange.bind(this)} tintColor={'#ff6666'} style={{height:'0.64rem'}} values={values} selectedIndex={selectedIndex} />
            </div>
        )
    }
    onChange(e){
        const that=this.props.that;
        that.setState({
            selectedSegmentIndex:e.nativeEvent.selectedSegmentIndex
        })
    }
}