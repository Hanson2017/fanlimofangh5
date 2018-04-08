import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../utils/api';
import Title from '../../../components/title';
import './index1.scss';
class Item extends Component {
    render() {
        const data = this.props.data;
        const activity = data.activity;
        const plat = data.plat;
        const uri = Api.domain + plat.platlogo;
        return (
            <Link to={'/Activity/Detail/' + activity.id} className='link'>
                <div className='head'><img src={uri} className='logo' /></div>
                <div className='body'>
                    <p>出借{activity.invest}获<span className='red'>{activity.rebate}</span></p>
                    <p>相当于年化
                    <span className='red'>
                            {
                                activity.atype == 1 || activity.atype == 4 ?
                                    activity.rate + '%'
                                    :
                                    '浮动'
                            }
                        </span>
                    </p>
                </div>
            </Link>
        )
    }
}


export default class GroupNew extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className='group mt30'>
                <Title title={this.props.title} />
                <ul className='itemListNew'>
                    {
                        data.map((item, i) => {
                            return (
                                <Item data={item} key={i} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}