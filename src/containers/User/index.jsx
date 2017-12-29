import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import Collect from './subpages/Collect'
import OrderList from './subpages/OrderList'
import Footer from '../../components/Footer'

class User extends Component {
    goHome = () => {
        const { history } = this.props
        history.push('/')
    }
    render() {
        const { userinfo: { cityname, username }, store } = this.props
        return (
            <div>
                <div className="main">
                    <Header title="用户主页" goBack={this.goHome} />
                    <UserInfo cityname={cityname} username={username} />
                    <Collect store={store} />
                    <OrderList />
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { userinfo: state.userinfo, store: state.store }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)