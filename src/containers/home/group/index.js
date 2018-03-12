import React, { Component } from 'react';


import Item from '../../../components/item';
import Title from '../../../components/title';

export default class Group extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className='group'>
                <Title title={this.props.title} />
                <div className='itemList'>
                    {
                        data.map((item, i) => {
                            return (
                                <Item data={item} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}