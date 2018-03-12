import React, { Component } from 'react';


export default class InputList extends Component{
    render(){
        const {labelText,params,isBorder} = this.props;
        return (
            <div  className={isBorder ? 'inputList ' : 'inputList inputListBt'}>
                <label className='labelText'>{labelText}</label>
                <input  {...params} className='text' onChange={this.props.handleChange}  />
            </div>
        )
    }
}
