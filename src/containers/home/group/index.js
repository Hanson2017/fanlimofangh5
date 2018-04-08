import React, { Component } from 'react';


import Item from '../../../components/item';
import Title from '../../../components/title';

export default class Group extends Component {
    render() {
    
        const {data,type,dateDiff} = this.props;
        return (
            <div className={type === 0?'group mt30 groupFrist':'group mt30 groupRepeat'}>
                <Title title={this.props.title} />
                <div className='itemList'>
                    {
                        data.map((item, i) => {
                            return (
                                <Item dateDiff={dateDiff} data={item} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}