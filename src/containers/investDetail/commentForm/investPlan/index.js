import React, { Component } from 'react';
import { Picker } from 'antd-mobile';

const CustomChildren = props => (
    <li>
        <label>{props.children}</label>
        <span className='text' onClick={props.onClick}>{props.extra}</span>
    </li>
);

export default class InvestPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            value: null
        };
    }
    componentWillMount() {
        const data = this.props.data;
        const dataList = [];
        for (let i = 0; i < data.length; i++) {
            dataList.push({ label: '方案' + data[i].number, value: data[i].number })
        }
        this.setState({
            data: dataList,
        })
    }
    render() {
        const that = this.props.that;
        return (
            <Picker
                title="选择方案"
                extra="请选择"
                data={this.state.data}
                cols={1}
                value={this.state.value}
                onChange={v => {
                    that.setState({ investPlan: v })
                    this.setState({ value: v })
                }}
            >
                <CustomChildren>所选方案</CustomChildren>
            </Picker>
        )
    }
    clear() {
        this.setState({
            value: null
        });
    }
}