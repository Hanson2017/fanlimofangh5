import React, { Component } from 'react';

import './index1.scss';

export default class LoadMore extends React.Component {
    render() {
        const { isLoadMore, isLoadMoreOver } = this.props;
        if (isLoadMore) {
            return (
                <div className='loadmore'>正在加载...</div>
            )
        }
        else {
            if (isLoadMoreOver) {
                return (
                    <div className='loadmore'>没有更多了～</div>
                )
            }
            else {
                return null;
            }
        }

    }
}