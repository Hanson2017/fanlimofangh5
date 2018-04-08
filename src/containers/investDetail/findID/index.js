import React, { Component } from 'react';
import Title from '../title/';
export default class FindID extends React.Component {
    render() {
        const uri = this.props.uri;
        return (
            <div className='mt15'>
                <Title title={'回帖注册ID从哪儿找？'} />
                <div className='detailBox'>
                    <img src={uri} />
                </div>
            </div>
        )
    }
}

