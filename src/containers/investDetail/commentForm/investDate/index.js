import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Util from '../../../../utils/util';

const CustomChildren = props => (
    <li>
        <label>{props.children}</label>
        <span className='text' onClick={props.onClick}>{props.extra}</span>
    </li>
);

export default class InvestDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: moment(Util.setDate(new Date()), 'YYYY-MM-DD').utcOffset(8)
        };
    }
    render() {
        const that = this.props.that;
        return (
            <DatePicker
                mode="date"
                title="选择日期"
                extra="请选择"
                value={this.state.value}
                onChange={v => {
                    that.setState({
                        investDate: Util.setDate(new Date(v))
                    })
                    this.setState({ value: v })
                }}
            >
                <CustomChildren>投资日期</CustomChildren>
            </DatePicker>
        )
    }
}