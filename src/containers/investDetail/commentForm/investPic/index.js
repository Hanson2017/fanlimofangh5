import React, { Component } from 'react';
import Api from '../../../../utils/api';

export default class InvestPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: '',
            show: false,
            bigpicUri: ''
        };
    }
    render() {
        const uri = Api.domain + this.props.uri;
        const { show, bigpicUri } = this.state;
        return (
            <div className='investPic'>
                {
                    show ?
                        <div className='bigimg-cover' onClick={() => {
                            this.setState({
                                show: false,
                                bigpicUri: ''
                            });
                        }}>
                            <img src={bigpicUri} />
                        </div>
                        :
                        null
                }
                <div>
                    <p className='text'>出借截图</p>
                    <div className='pic' onClick={() => {
                        if (this.state.uri !== '') {
                            this.setState({
                                show: true,
                                bigpicUri: this.state.uri
                            });
                        }
                    }}>
                        {
                            this.state.uri == '' ?
                                <img src={require('../../../../assets/images/uploadimg.jpg')} />
                                :
                                <img src={this.state.uri} />
                        }
                    </div>
                    <div className='uploadwp'>
                        <button type='submit' className='upload'>本地上传</button>
                        <input type='file' onChange={this.onChange.bind(this)} className='file' />
                    </div>
                </div>
                <div className='shili'>
                    <p className='text'>示例：</p>
                    <div className='pic' onClick={() => {
                        this.setState({
                            show: true,
                            bigpicUri: uri
                        });
                    }}>
                        <img src={uri} />
                    </div>
                </div>
            </div>
        )
    }
    onChange(evt) {
        var that = this;
        var thatt = this.props.that;
        thatt.setState({
            investPic: evt.target.files[0]
        });
        if (!window.FileReader) return;
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {

            if (!f.type.match('image.*')) {
                continue;
            }
            var reader = new FileReader();

            reader.onload = function (theFile) {

                return function (e) {
                    // img 元素    
                    that.setState({
                        uri: e.target.result
                    });
                };
            }(f);
            reader.readAsDataURL(f);
        }
    }
    clear() {
        this.setState({
            uri: '',
            show: false,
            bigpicUri: ''
        });
    }
}