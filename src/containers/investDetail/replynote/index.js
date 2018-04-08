import React, { Component } from 'react';

export default class ReplyNote extends React.Component {

    render() {
        const data = this.props.data;
        let postinfo = '';
        let comment_field = data.comment_field;

        if (comment_field.indexOf('c_userid') >= 0) {
            postinfo += '注册ID，';
        }
        if (comment_field.indexOf('c_phone') >= 0) {
            postinfo += '注册手机号码，';
        }
        if (comment_field.indexOf('c_username') >= 0) {
            postinfo += '真实姓名（实名认证），';
        }
        postinfo += '所选择方案，';

        if (comment_field.indexOf('investdate') >= 0) {
            postinfo += '出借日期，';
        }
        if (comment_field.indexOf('img_invest') >= 0) {
            postinfo += '出借截图，';
        }
        postinfo += '支付宝帐号';

        return (
            <div className='detailBox'>                
                <div className='ddView'>
                    回帖说明：<br />
                   {postinfo}
                </div>
            </div>
        )
    }
}