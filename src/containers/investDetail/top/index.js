import React, { Component } from 'react';
import Util from '../../../utils/util';
import './index1.scss';

export default class Top extends React.Component {
    render() {
        const data = this.props.data;
        const activity = data.activity;
        const plat = data.plat;
        return (
            <div className='top'>
                <div className='tags'>
                    <span className='tag'>{activity.isrepeat == 0 ? '首投' : '复投'}活动</span>

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
                    {
                        activity.status == 1 ?
                            activity.atype == 1 ?
                                <div className='type'>
                                    <span className='tag'>风控分:{plat.riskscore}</span>
                                    {
                                        plat.noshowrisk !== 1?
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
                </div>
                <div className='bt'>
                    <span className='num'>已有{data.commentnum }人参加</span>
                    <span className='keyword'>
                        关键字:
                        {
                            Util.formatSymbol(activity.keywords).map((item,i)=>{
                                return <i key={i}>{item}</i>;
                            })
                        }
                    </span>
                </div>
            </div>
        )
    }
}
