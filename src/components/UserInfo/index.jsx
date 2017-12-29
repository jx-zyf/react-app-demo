import React, { Component } from 'react'

import './style.less'

class UserInfo extends Component {
    render() {
        const { username, cityname } = this.props
        return (
            <div>
                <h2 className="sub_title">个人信息</h2>
                <div className="userinfo-container">
                    <p>
                        <i className="icon-user"></i>
                        &nbsp;
                        <span>{username}</span>
                    </p>
                    <p>
                        <i className="icon-map-marker"></i>
                        &nbsp;
                        <span>{cityname}</span>
                    </p>
                    <p>
                        <i className="icon-phone"></i>
                        &nbsp;
                        <span>18888888888</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default UserInfo