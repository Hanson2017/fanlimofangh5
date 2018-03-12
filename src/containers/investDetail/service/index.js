import React, { Component } from 'react';
import './index1.scss';

export default class Service extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className='detailBox'>
                <h6 className='title'>寻求帮助：</h6>
                <div className='detailService'>
                    {
                        data.qqservice.split(',').map((item, i) => {
                            return (
                                <a key={i} target='_blank' className='btn' href={"mqqwpa://im/chat?chat_type=wpa&uin=" + item + "&version=1&src_type=web&web_src=fanllimofang.com"}  >QQ在线客服{i + 1}</a>
                            )
                        })
                    }

                </div>
                <p className='detailServiceP'>返利魔方{data.qqgroup_num}群：{data.qqgroup}</p>
            </div>
        )
    }
}