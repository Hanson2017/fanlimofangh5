import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { TabBar, Icon, Modal } from 'antd-mobile';

import Home from '../home';
import FirstInvest from '../firstInvest';
import RepeatInvest from '../repeatInvest';
import Help from '../help';
import Account from '../account';

const alertShow = Modal.alert;

class MainTabBar extends React.Component {
    render() {
        const pathname = this.props.location.pathname;
        const history = this.props.history;
        return (
            <TabBar
                unselectedTintColor="#888"
                tintColor="#FF6666"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={<Icon type={require('../../assets/icons/home.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/home.svg')} />}
                    selected={pathname === '/'}
                    onPress={() => {
                        history.push("/");
                    }}
                >
                    <Route path="/" component={Home} />
                </TabBar.Item>
                <TabBar.Item
                    title="首投"
                    key="首投"
                    icon={<Icon type={require('../../assets/icons/firstInv.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/firstInv.svg')} />}
                    selected={pathname === '/firstInvest'}
                    onPress={() => {
                        history.push("/firstInvest");
                    }}
                >
                    <Route path="/firstInvest" component={FirstInvest} />
                </TabBar.Item>
                <TabBar.Item
                    title="复投"
                    key="复投"
                    icon={<Icon type={require('../../assets/icons/repeatInv.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/repeatInv.svg')} />}
                    selected={pathname === '/repeatInvest'}
                    onPress={() => {
                        history.push("/repeatInvest");

                    }}
                >
                    <Route path="/repeatInvest" component={RepeatInvest} />
                </TabBar.Item>
                <TabBar.Item
                    title="问答"
                    key="问答"
                    icon={<Icon type={require('../../assets/icons/ask.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/ask.svg')} />}
                    selected={pathname === '/help'}
                    onPress={() => {
                        history.push("/help");
                    }}
                >
                    <Route path="/help" component={Help} />
                </TabBar.Item>
                <TabBar.Item
                    title="APP"
                    key="APP"
                    icon={<Icon type={require('../../assets/icons/appDown.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/appDown.svg')} />}
                    selected={pathname === '/appdown'}
                    onPress={() => {
                        alertShow('提示', '前往下载APP，更好的体验', [{
                            text: '取消', onPress: function onPress() {
                                return console.log('cancel');
                            }
                        }, {
                            text: '确认', onPress: function onPress() {
                                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=org.zywx.wbpalmstar.widgetone.uex11575732');
                            }
                        }]);
                    }}
                >
                    <Route path="/help" component={Help} />
                </TabBar.Item>
                <TabBar.Item

                    title="我的"
                    key="我的"
                    icon={<Icon type={require('../../assets/icons/my.svg')} />}
                    selectedIcon={<Icon type={require('../../assets/icons/my.svg')} />}
                    selected={pathname === '/member'}
                    onPress={() => {
                        history.push("/member");
                    }}
                >
                    <Route path="/member" component={Account} />
                </TabBar.Item>
            </TabBar>
        );
    }
}
export default MainTabBar;
