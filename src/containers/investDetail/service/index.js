import React, { Component } from 'react';
import Title from '../title/';
import './index1.scss';

export default class Service extends React.Component {
    render() {
        var that=this.props.that;
        const data = this.props.data;
        return (
            <div className='mt30'>
                <Title title={'寻求帮助'} />
                <div className='detailBox'>

                    <div className='detailService'>
                        {
                            data.qqservice.split(',').map((item, i) => {
                                return (
                                    <a key={i} target='_blank' className='btn' href={"mqqwpa://im/chat?chat_type=wpa&uin=" + item + "&version=1&src_type=web&web_src=fanllimofang.com"}  >QQ在线客服{i + 1}</a>
                                )
                            })
                        }

                    </div>
                    <p className='detailServiceP'>返利魔方{data.qqgroup_num}群：{data.qqgroup}（如有疑问，可加群咨询管理员。）</p>
                </div>
            </div>
        )
    }

}