import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Util from '../../../../../../utils/util';

const CustomChildren = props => (
    <div className={'inputList inputListBt'}>
        <label className='labelText'>{props.children}</label>
        <span className='text' onClick={props.onClick}>{props.extra}</span>
    </div>
);


export default class InvestDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    componentWillMount() {
        const date = moment(this.props.date, 'YYYY-MM-DD').utcOffset(8);
        this.setState({
            value: date
        })
    }
    render() {
        const that = this.props.that;
        return (
            <DatePicker
                mode="date"
                title="选择日期"
                extra="请选择"
                value={this.state.value}
                onChange={(date) => {
                    that.setState({ investdate: Util.setDate(date['_d']) })
                    this.setState({ value: date })
                }}
            >
                <CustomChildren>投资日期</CustomChildren>
            </DatePicker>
        )
    }
}