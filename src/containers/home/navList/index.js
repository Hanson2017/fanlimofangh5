import React, { Component } from 'react';
import { Grid, Icon } from 'antd-mobile';
import './index1.scss';
const iconList = [
    { title: '大额活动', iconName: 'homeNav-daer', router: '/tabInvest', tabId: 0 },
    { title: '小额活动', iconName: 'homeNav-xiaoer', router: '/tabInvest', tabId: 1 },
    { title: '高返利', iconName: 'homeNav-gaofan', router: '/tabInvest', tabId: 2 },
    { title: '存管系', iconName: 'homeNav-cunguan', router: '/tabInvest', tabId: 3 },
    { title: '融资系', iconName: 'homeNav-rongzi', router: '/tabInvest', tabId: 4 },
    { title: '国资系', iconName: 'homeNav-guozi', router: '/tabInvest', tabId: 5 },
    { title: '上市系', iconName: 'homeNav-shangshi', router: '/tabInvest', tabId: 6 },
    { title: '个人中心', iconName: 'homeNav-my', router: '/member', tabId: 6 }
];

const data = iconList.map((item, i) => ({
    icon: <Icon type={require('../../../assets/icons/' + item.iconName + '.svg')} color={'#e62344'} size={'md'} />,
    text: item.title,
}));


export default class NavList extends React.Component {
    render() {
        const history = this.props.history;
        return (
            <div className='NavList'>
                <Grid data={data} hasLine={false} onClick={(el, index) => {
                    const location = {
                        pathname: iconList[index].router,
                        state: { tabId: iconList[index].tabId }
                    }
                    history.push(location)
                }} />
               
            </div>
        )
    }
}
