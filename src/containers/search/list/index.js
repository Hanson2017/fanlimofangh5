import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index1.scss';

export default class SearchList extends React.Component {
    render() {
        const { searchList, searchKey } = this.props;
        return (
            <div className='searchListContainer'>
                {
                    searchList.length > 0 ?
                        <ul className='searchList'>
                            {
                                searchList.map((item, i) => {
                                    const url = '/Activity/Detail/' + item.id;
                                    return (
                                        <li key={i}>
                                            <Link to={url} className='link'>
                                                <span className='platname'>{item.platname}</span>
                                                <span className='state'>（{item.isrepeat === 0 ? '首投' : '复投'}）</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        :
                        searchKey !== '' ?
                            <span className='null'>没有相关记录</span>
                            :
                            null
                }
            </div>
        )
    }

}