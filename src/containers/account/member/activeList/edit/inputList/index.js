import React, { Component } from 'react';


export default class InputList extends Component{
    render(){
        const {labelText,params,placeholder,isBorder} = this.props;
        return (
            <li>
                <label className='labelText'>{labelText}</label>
                <input  {...params} className='text' onChange={this.props.handleChange} />
            </li>
        )
    }
}
