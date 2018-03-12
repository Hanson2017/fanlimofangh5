import React, { Component } from 'react';
import Util from '../../../utils/util';
import Title from '../../../components/title';
import './index1.scss';


export default class Plans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: [],
            ref: false,
            siteUrl: ''
        };
    }
    componentWillMount() {
        const activity = this.props.data.acinfo.activity
        const siteUrls = activity.siteurl.split(',')
        const index = Math.floor((Math.random() * siteUrls.length));
        const siteUrl = siteUrls[index];
        const siteUrlH5 = activity.siteurl_h5;
        const acSiteUrl = siteUrlH5 ? siteUrlH5 : siteUrl;

        const isHiddenNew = [];
        for (let i = 0; i < this.props.data.plans.length; i++) {
            isHiddenNew.push({ hidden: true, moreText: '点击查看详情' })
        }
        this.setState({
            isHidden: isHiddenNew,
            siteUrl: acSiteUrl
        })
    }
    render() {
        const data = this.props.data;
        const plans = data.plans;
        const acinfo = data.acinfo;
        return (
            <div>
                <Title title={'投资方案'} />
                <dl className='plansList'>
                    <dt className='item'>
                        <span className='ic1'>方案</span>
                        <span className='ic2'>期限</span>
                        <span className='ic3'>投资项目</span>
                        <span className='ic4'>充值金额</span>
                        <span className='ic5'>魔方返</span>
                        <span className='ic6'>总收益</span>
                    </dt>
                    {
                        plans.map((item, i) => {
                            return (
                                <dd key={i}>
                                    <div className='item' >
                                        <span className='ic1'>{item.number}</span>
                                        <span className='ic2'>{item.termdescription}</span>
                                        <span className='ic3'>{item.projects}</span>
                                        <span className='ic4'>≥ {item.invest}</span>
                                        <span className='ic5 red'>{item.mfrebate}</span>
                                        <span className='ic6'>
                                            {
                                                acinfo.activity.atype == 1 || acinfo.activity.atype == 4 ?
                                                    item.rebate
                                                    :
                                                    '浮动'
                                            }
                                        </span>
                                    </div>
                                    <div className='more' onClick={() => {
                                        const isHidden = this.state.isHidden;
                                        isHidden[i].hidden = !isHidden[i].hidden;
                                        if (!isHidden[i].hidden) {
                                            isHidden[i].moreText = '点击收起'
                                        }
                                        else {
                                            isHidden[i].moreText = '点击查看详情'
                                        }
                                        this.setState({
                                            ref: !this.state.ref
                                        })
                                    }}>
                                        {this.state.isHidden[i].moreText}
                                    </div>
                                    {
                                        !this.state.isHidden[i].hidden ?
                                            <div className='content'>
                                                <h6 className='hd'>
                                                    <span>第{acinfo.activity.number}期</span>
                                                    <span className='num'>方案{item.number}</span>
                                                </h6>
                                                <div className='bd'>
                                                    <ul>
                                                        <li>
                                                            方案{item.number}换算成年化收益是
                                                    <span className='red'>
                                                                {
                                                                    acinfo.activity.atype == 1 || acinfo.activity.atype == 4 ?
                                                                        item.rate + '%'
                                                                        :
                                                                        '浮动'
                                                                }
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label>赔付率:</label>
                                                            {
                                                                item.invest > 0 ?
                                                                    (item.protectamount / item.invest * 100).toFixed(2) + '%'
                                                                    :
                                                                    0
                                                            }
                                                            ({item.protectamount + ''}元)
                                                </li>
                                                        <li>
                                                            <label>保障时间:</label>
                                                            {item.protectday}天（从投资当日起算）
                                                </li>
                                                        <li>
                                                            <label>投资流程：</label>
                                                        </li>
                                                    </ul>
                                                    <div>
                                                        <p>
                                                            1、通过<a className='red'  target="_blank" href={this.state.siteUrl}>直达链接</a>
                                                            {
                                                                acinfo.activity.invitation_code != '' ?
                                                                    <span>
                                                                        进入网站并注册，邀请码填写<i className="red">{acinfo.activity.invitation_code}</i>
                                                                    </span>
                                                                    :
                                                                    <span>
                                                                        进入网站{acinfo.activity.isrepeat != 1 ? '并注册' : null}
                                                                    </span>
                                                            }

                                                        </p>
                                                        {
                                                            item.investprocess.split('<br />').map((text, index) => {
                                                                return (
                                                                    <p key={index}>{Util.delHtmlTag(text)}</p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    {
                                                        acinfo.activity.special ?
                                                            <div className='special'>
                                                                <p>特别说明</p>
                                                                <p className='red'>{acinfo.activity.special}</p>
                                                            </div>
                                                            :
                                                            null
                                                    }

                                                </div>
                                            </div>
                                            :
                                            null
                                    }

                                </dd>
                            )
                        })
                    }

                </dl>
            </div>
        )
    }

}