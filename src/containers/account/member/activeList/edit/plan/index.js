import React, { Component } from 'react';
import { Picker } from 'antd-mobile';

const CustomChildren = props => (
    <div className={'inputList inputListBt'}>
        <label className='labelText'>{props.labelText}</label>
        <span className='text' onClick={props.onClick}>{props.extra}</span>
    </div>
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
            value: [this.props.plan]
        })
    }
    render() {
        const that = this.props.that;
        return (
            <Picker
                title="选择方案"
                extra={'方案' + this.props.plan}
                data={this.state.data}
                cols={1}
                value={this.state.value}
                onChange={v => {
                    that.setState({ plan: v[0] })
                    this.setState({ value: v })
                }}
            >
                <CustomChildren labelText={'所选方案'} />
            </Picker>
        )
    }
}