import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import Util from '../../utils/util';

import './index1.scss';

export default class Item extends React.Component {
    render() {
        const data = this.props.data;
        const activity = data.activity;
        const plat = data.plat;
        const uri = Api.domain + data.plat.platlogo;
        return (
            <Link to={'/Activity/Detail/' + activity.id} className='investItem'>
                <div className='head'>
                    <div className='logoView'><img src={uri} className='logo' /></div>
                    <div className='tags'>
                        {
                            activity.isrepeat == 0 ?
                                <span>首投</span>
                                :
                                <span>复投</span>
                        }
                        {
                            activity.keywords != '' ?
                                Util.formatSymbol(activity.keywords).map((item, i) => {
                                    return (
                                        <span key={i}>{item}</span>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                </div>
                <ul className='body'>
                    <li>
                        <span>投{activity.invest}获得</span>
                        <span className='bt red'>{activity.rebate}</span>
                    </li>
                    <li>
                        <span>相当于年化</span>
                        <span className='bt red'>
                            {
                                activity.atype == 1 || activity.atype == 4 ?
                                    activity.rate + '%'
                                    :
                                    '浮动'
                            }

                        </span>
                    </li>
                    <li>
                        <span>已参加</span>
                        <span className='bt num'>{data.commentnum}人</span>
                    </li>
                </ul>
                <div className='foot'>
                    {
                        activity.status == 1 ?
                            activity.atype == 1 ?
                                <div className='type'>
                                    <span className='tag'>风控分:{plat.riskscore}</span>
                                    {
                                        plat.noshowrisk !== 1 ?
                                        <span className='tag'>{Util.risklevel(plat.risklevel)}</span>
                                        :
                                        null
                                    }
                                    
                                </div>
                                :
                                <span className='tag'>{Util.investType(activity.atype)}</span>
                            :
                            null
                    }
                    {
                        activity.ishighest == 1 ?
                            <span className='tag'>全网最高</span>
                            :
                            null
                    }
                    {
                        activity.isprotect == 1 ?
                            <span className='tag'>魔方保障</span>
                            :
                            null
                    }
                    {
                        data.repayday == '当日返现' ?
                            <span className='tag'>当日返现</span>
                            :
                            <span className='tag'>{data.repayday.replace('个', '') + '返'}</span>
                    }

                </div>
                {
                    activity.status == 2 ?
                        <div className='maskView'>
                            <div className='mask'></div>
                            <div className='maskText'>已结束</div>
                        </div>
                        :
                        null
                }
            </Link>
        )
    }
}