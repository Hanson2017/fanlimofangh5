import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import Api from '../../../utils/api';
import Util from '../../../utils/util';
import Loading from '../../../components/loading';
import Loadmore from '../../../components/loadmore';
import './index1.scss';

class Item extends Component {
    render() {
        const { data, isHidden, that, index } = this.props;
        const listNo = parseInt(this.props.index) + 1;
        return (
            <div className='list'>
                <h6 className='title'>{listNo + ''}.{data.title}</h6>
                <div className={that.state.isHidden[index].hidden?'moreBtn':'moreBtn open'}
                    onClick={() => {
                        var isHidden11 = that.state.isHidden;
                        isHidden11[index].hidden = !isHidden11[index].hidden;
                        if (!isHidden11[index].hidden) {
                            isHidden11[index].moreText = '点击收起';
                        }
                        else {
                            isHidden11[index].moreText = '点击查看详情';
                        }
                        that.setState({
                            ref: !that.state.ref
                        });
                    }}

                >{isHidden.moreText}
                </div>
                {
                    isHidden.hidden ?
                        null
                        :
                        <div className='con'>
                            {
                                data.con_str.split('</p>').map((item, i) => {
                                    const newText = Util.delHtmlTag(item)
                                    return (
                                        <p key={i}>{newText}</p>
                                    )
                                })
                            }
                        </div>
                }

            </div>
        )
    }
}

export default class HelpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
            isHidden: [],
            ref: false
        };
    }
    render() {
        const { dataSource, isHidden } = this.state;

        if (this.state.loading) {
            return <Loading />;
        }
        else {
            return (
                <div className='helpListContainer'>
                    {
                        dataSource.length > 0 ? dataSource.map((item, i) => {
                            return (
                                <Item key={i} data={item} isHidden={isHidden[i]} that={this} index={i} />
                            )
                        })
                        :
                        null
                    }
                </div>
            )
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        var that = this;
        var url = Api.getInfoList + '?type=bangzhu&page=1' + '&pagesize=100';
        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (response) {
                if (response.result == 1) {
                    var isHiddenNew = [];
                    for (var i = 0; i < response.data.length; i++) {
                        isHiddenNew.push({ hidden: true, moreText: '点击查看详情' });
                    }
                    that.setState({
                        loading: false,
                        dataSource: response.data,
                        isHidden: isHiddenNew
                    });
                }
            });
    }
}