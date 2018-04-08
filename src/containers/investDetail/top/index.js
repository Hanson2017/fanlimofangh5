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
                 <div className='bt'>
                    <span className='num'>已参加<b>{data.commentnum }人</b></span>
                    <span className='keyword'>
                        关键字:
                        {
                            Util.formatSymbol(activity.keywords).map((item,i)=>{
                                return <i key={i}>{item}</i>;
                            })
                        }
                    </span>
                </div>
                <div className='tags'>
                    <span className={activity.isrepeat == 0 ?'tag first':'tag repeat'}>{activity.isrepeat == 0 ? '首次出借' : '多次出借'}</span>

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
                <div className='reason'>
                    <h6>推荐理由：</h6>
                    <p>{Util.delHtmlTag(activity.reasons)}</p>                    
                </div>
            </div>
        )
    }
}
