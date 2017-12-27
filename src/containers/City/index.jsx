import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'
import localStorage from '../../util/localStorage'

import Header from '../../components/Header'
import CurCity from '../../components/City/CurCity'
import CityList from '../../components/City/CityList'
import Footer from '../../components/Footer'

class City extends Component {
    changeCity = (cityname) => {
        const { userinfoActions: { update }, history } = this.props
        // 更新redux城市信息
        update(cityname)
        // 将城市信息存到localStorage
        localStorage.setItem('cityname', cityname)
        // 回到首页
        history.push('/')
    }
    render() {
        const { history, userinfo: { cityname } } = this.props
        return (
            <div>
                <div className="main">
                    <Header title="选择城市" goBack={history.goBack} />
                    <CurCity cityname={cityname}/>
                    <CityList changeCity={this.changeCity} />
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const userinfo = state.userinfo
    return { userinfo }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)