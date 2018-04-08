import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import Util from '../../../utils/util';
import './index1.scss';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    render() {
        const { history, endtime, uri ,dateDiff} = this.props;
        return (
            <div className='detailHeader'>
                <div className='back' onClick={() => {
                    if (history.action !== 'POP') {
                        history.goBack()
                    }
                    else {
                        history.replace('/')
                    }
                }}>
                    <Icon type={require('../../../assets/icons/left.svg')} color={'#a9a9a9'} size={'xxs'} />
                </div>
                <div className='logo'>
                    {
                        uri ?
                            <img src={uri} />
                            :
                            null
                    }

                </div>
                {
                    endtime ?
                        <div className='countdown'>
                            即将结束
						        <span className="date">
                                {Util.countTime(endtime,dateDiff)}
                            </span>
                        </div>
                        :
                        null
                }
            </div>
        )
    }
    tick() {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }));
    }
    componentDidMount() {
        const { endtime } = this.props;
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        const { endtime } = this.props;
        clearInterval(this.interval);
    }
}
