import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'antd-mobile';

import './index1.scss';

export default class Marquee extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <Carousel className="carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
            >
                {
                    data.map((item, i) => {
                        return (
                            <Link key={i} to={'/Activity/Detail/' + item.activityid} className="v-item">{item.title}</Link>
                        )
                    })
                }
            </Carousel>
        )
    }
}