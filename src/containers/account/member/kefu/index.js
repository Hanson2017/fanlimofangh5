import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../../utils/api';
import NavBar from '../../../../components/navBar';
import './index1.scss';

export default class Kefu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: null,
        }
    }
    render() {
        const { dataSource } = this.state;
        return (
            <div className='container'>
                <NavBar title={'联系客服'} history={this.props.history} />
                <div className='memberKefuText'>
                    <p>
                        HI！欢迎来到返利魔方！<br/>
                    由于在线客服访问人数较多，为节省您的宝贵时间，可以先查看自助问答。如仍未解决，请再联系在线客服，我们将尽心解决您的问题！
                    </p>
                    <Link to={{
                        pathname: '/help',
                        state: { tabId: 1 }
                    }} className='link'>前往自助问答</Link>
                </div>
                {
                    this.state.loading ?
                        null
                        :
                        <div className='memberKefuOnline mt30'>
                            <div className="detailService">
                                {
                                    dataSource.qqservice.split(',').map((item, i) => {
                                        return (
                                            <a key={i} target='_blank' className='btn' href={"mqqwpa://im/chat?chat_type=wpa&uin=" + item + "&version=1&src_type=web&web_src=fanllimofang.com"}  >QQ在线客服{i + 1}</a>
                                        )
                                    })
                                }
                            </div>
                            <p className='detailServiceP'>返利魔方{dataSource.qqgroup_num}群：{dataSource.qqgroup}（如有疑问，可加群咨询管理员。）</p>
                        </div>
                }

            </div>
        )
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        var that = this;
        var url = Api.getqqinfo;
        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    that.setState({
                        loading: false,
                        dataSource: response.data
                    })
                }
            });
    }
}