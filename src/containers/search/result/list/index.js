import React, { Component } from 'react';

import Item from '../../../../components/item';

export default class List extends Component{
    render(){
        const {data}=this.props;
        return(
            <div className='searchResultList'>
                {
                    data.map((item,i)=>{
                        return(
                            <Item data={item} key={i} />
                        )
                    })
                }
            </div>
        )
    }
}