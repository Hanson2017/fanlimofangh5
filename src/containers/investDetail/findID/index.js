import React, { Component } from 'react';

export default class FindID extends React.Component {
    render() {
        const uri = this.props.uri;
        return (
            <div className='detailBox mt10'>
                <h6 className='title'>回帖注册ID从哪儿找？</h6>
                <div className='ddView'>
                    <img src={uri} />
                </div>
            </div>
        )
    }
}