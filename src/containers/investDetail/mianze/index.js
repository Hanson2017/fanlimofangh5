import React, { Component } from 'react';
import Title from '../title/';
export default class Mianze extends React.Component {
    render() {
        return (
            <div className='mt30'>
                <Title title={'免责声明'} />
                <div className='detailBox'>
                    <div className='ddView'>返利魔方仅为信息平台，本身不吸纳用户资金。活动平台不保证100%安全，如出现意外情况（包括但不局限于平台提现困难/逾期/倒闭/跑路等导致无法拿回本金的情况），如该活动享受魔方保障，返利魔方仅在该活动注明的保障期内（自用户通过返利魔方出借之日起计算保障期限），按照赔付率对部分本金进行赔付。除此以外，返利魔方不承担任何责任。</div>
                </div>
            </div>
        )
    }
}