import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index1.scss';

export default class TabBar extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 0
        }
        this.currentClass = this.currentClass.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.contentClass = this.contentClass.bind(this);
    }
    render() {
        const {fixed}=this.props;
        return (
            <div className="mf-tabs">
                <ul className={fixed?'mf-tabs-bar fixed':'mf-tabs-bar'}>
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <List key={index} index={index} tab={element.props.name} handleClick={this.handleClick} currentClass={this.currentClass} />
                            )
                        })
                    }
                </ul>
                <div className="mf-tabs-content">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            if (this.state.current == index) {
                                return (
                                    <div>{element}</div>
                                )
                            }

                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            current: this.props.current || 0
        })
    }
    handleClick(index) {
        this.setState({ current: index });
    }
    currentClass(index) {
        return this.state.current === index ? 'current' : '';
    }
    contentClass(index) {
        return this.state.current === index ? 'active' : '';
    }
}

class List extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick(this.props.index);
    }
    render() {
        const tab = this.props.tab;
        return (
            <li className={'mf-tabs-tab ' + this.props.currentClass(this.props.index)} onClick={this.handleClick} >{tab}</li>
        )
    }
}

