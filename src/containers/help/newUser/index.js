import React, { Component } from 'react';
import Api from '../../../utils/api';
import Title from '../../../components/title';

import './index1.scss';
export default class newUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: [true, true],
            ref: false,
            fixed: null
        };
        this.handleScroll = this.handleScroll.bind(this)
    }
    render() {
        return (
            <div className='newUserContainer'>
                {
                    this.state.fixed ?
                        <Title title={this.state.fixed} isFixed={true} />
                        :
                        null
                }
                <Title title={'平台介绍'} />
                <div className='box'>
                    <div className='content'>
                        返利魔方是基于网贷行业的返利平台，通过返利魔方进行网贷投资你可以获得额外返利。
                    </div>
                </div>
                <div className='mt30'>
                    <Title title={'网址、微信公众号及APP下载'} />
                    <div className='box'>
                        <div className='content'>
                            <p>PC版网址：&nbsp;&nbsp;<a target="_blank" className='red' href='http://www.fanlimofang.com'>http://www.fanlimofang.com</a></p>
                            <p>移动版网址：<a className='red' href='http://m.fanlimofang.com'>http://m.fanlimofang.com</a></p>
                            <p>微信公众号：魔方活动  （因“返利”被禁止申请，所以叫魔方活动）</p>
                            <p>APP下载请扫描二维码  （安卓版及IOS版均有效）：</p>
                            <p className='mt10'><img src={Api.domain + '/images/app/appdown.png'} style={{ width: '2.4rem', height: '2.4rem' }} /></p>
                        </div>
                    </div>
                </div>
                <div className='mt30' ref='newUser'>
                    <Title title={'新手操作流程'} />
                    <div className='box'>
                        <div className='content'>
                            <p>先说2个关键点：</p>
                            <p>① 首投活动<span className='red'>必须从直达链接跳转到平台进行注册，必须！ </span><strong>（复投不需要）</strong>；</p>
                            <p>② 严格按照页面里描述的投资规则进行投资，完事了记得在页面下方回帖，留下正确信息以及支付宝帐号，这样才能拿到返利。</p>

                            <div className='bdr'>
                                <p>下面以投哪网活动为例来讲解具体操作过程。</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='box mt20'>
                    <div className='content'>

                        <h5 className='h5'>一、首先从返利魔方APP首页或项目列表页找到你感兴趣的活动，如下图所示：</h5>
                        <p><img src={Api.domain + '/images/app/p1.png?20170424'} className='img' /></p>
                        <p>（在上图你可以看到该平台的风控评分和风险等级等信息。）</p>

                    </div>
                </div>
                <div className='box mt20'>
                    <div className='content'>

                        <h5 className='h5'>二、如果你对该活动有兴趣，</h5>
                        <h6 className='h6'>A、点击进入详情页面进行查看，如下图所示：</h6>
                        <p><img src={Api.domain + '/images/app/p2.png?20170424'} className='img' /></p>
                        <p>在上图中我们可以了解到关于活动的大体情况描述:</p>


                        <div className='more' onClick={() => {
                            this.state.isHidden[0] = !this.state.isHidden[0];
                            this.setState({
                                ref: !this.state.ref
                            })
                        }}>点开查看详情</div>
                        {
                            this.state.isHidden[0] ?
                                null
                                :
                                <div className='mt20'>
                                    <p><b>1代表</b> 方案序号</p>
                                    <p><b>2代表</b> 每个方案投资是投资多长时间的项目；（投资项目的期限可以比方案要求的更长，但不能短于方案要求的期限。）</p>
                                    <p><b>3代表</b> 投资哪一类项目；</p>
                                    <p><b>4代表</b> 需要充值多少；（可以充值更多，也可以分次充值，但不能少于方案要求的金额。）</p>
                                    <p><b>5代表</b> 返利魔方给多少返利；（<span className='red'>这里就是通过魔方投资可以多得到的钱了</span>）</p>
                                    <p><b>6代表</b> 总收益是多少；</p>
                                    <p><b>7代表</b> 页面最下面是“直达链接”，需要点击“直达链接”到平台去注册才行哦。</p>
                                </div>
                        }
                        <div className='bdr'>
                            <h6 className='h6'>B、点击某个方案下面的“点击查看详情”按钮，可以很清楚得看到投资方案的信息。</h6>
                            <p>如下图所示：</p>
                            <p className='mt10'><img src={Api.domain + '/images/app/p3.png?20170424'} className='img' /></p>

                            <div className='more' onClick={() => {
                                this.state.isHidden[1] = !this.state.isHidden[1];
                                this.setState({
                                    ref: !this.state.ref
                                })
                            }}>点开查看详情</div>
                            {
                                this.state.isHidden[1] ?
                                    null
                                    :
                                    <div className='mt20'>
                                        <p><b>1代表</b> 投资收益换算成年化收益率是多少</p>
                                        <p><b>2代表</b> 假设平台发生意外导致拿不回本金，返利魔方对本金的赔付比例。（示例这里写的是0</p>
                                        <p><b>3代表</b> 魔方赔付的保障期限，比如你2007年1月1日参加活动进行投资，假设保障期是35天，那么在2007年2月4日之前如果因网贷平台原因导致无法拿回本金，则魔方会对该笔投资进行赔付。赔付兑现时间为从返利魔方确认该平台无法兑付起，1个月内按照赔付率进行赔付。（该示例中：如果在2月4日之前网贷平台状态为正常，但用户自己未提现，则魔方不予赔付）。</p>
                                        <p><b>4代表</b> 投资流程，这里是对投资过程做详细说明，请根据投资流程指引进行投资。 （投资流程说明一般分为几部分内容，
                                                一是通过直达链接进入网站注册，请千万记住，其他渠道注册的无法获得返利哦；
                                                二是一些普通操作，比如实名认证，绑定银行卡之类的；
                                                三是充值多少钱，准备投多长期限的哪种类型的项目；
                                                四是具体是怎么投，怎么用红包之类的，写得很清楚；
                                                五是投资明细和收益明细是怎么样的；
                        六是返利魔方的返现周期是怎么样的。）</p>
                                        <p><b>5代表</b> 特别说明，这里是对该活动一些特别需要注意的地方进行描述，请仔细阅读。</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='box mt20'>
                    <div className='content'>
                        <h5 className='h5'>三 、投资完记得在活动页面回帖</h5>
                        <p className='mt10'><img src={Api.domain + '/images/app/p4.png?20170424'} className='img' /></p>
                        <p>如上图所示，投资完记得在页面下面跟帖留下投资相关信息，包括你的支付宝帐号。</p>
                        <p>必须有支付宝帐号，返利魔方工作人员才能把返利支付给你）</p>
                        <p>建议回帖前先用QQ一键登录 或者 微信一键登录功能登录返利魔方，这样后续可以在个人中心里查看返利进度。</p>
                    </div>
                </div>

                <div className='mt30' ref={'newUserMz'}>
                    <Title title={'免责声明'} />
                    <div className='box'>
                        <div className='content'>
                            返利魔方仅为信息平台，本身不吸纳用户资金。活动平台不保证100%安全，如出现意外情况（包括但不局限于平台提现困难/逾期/倒闭/跑路等导致无法拿回本金的情况），如该活动享受魔方保障，返利魔方仅在该活动注明的保障期内（自用户通过返利魔方投资之日起计算保障期限），按照赔付率对部分本金进行赔付。
                            </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        var that = this;
        if (this.refs.newUser && this.refs.newUserMz) {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var newUser = this.refs.newUser.offsetTop - 161;
            var newUserMz = this.refs.newUserMz.offsetTop - 161
            if (scrollTop >= newUser && scrollTop <= newUserMz) {
                that.setState({
                    fixed: '新手操作流程'
                })
            }
            else {
                that.setState({
                    fixed: null
                })
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

}