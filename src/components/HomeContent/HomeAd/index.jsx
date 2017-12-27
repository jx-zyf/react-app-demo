import React, { Component } from 'react'

import './style.less'

class HomeAd extends Component {
    render() {
        const { data } = this.props
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                {data.length > 0
                    ? <div className="ad-container clear-fix">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="ad-item float-left">
                                        <a href={item.link} target="_blank">
                                            <img src={item.img} alt={item.title} />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <div className="ad-container clear-fix">加载中...</div>
                }
            </div>
        );
    }
}

export default HomeAd