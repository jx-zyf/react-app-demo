import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeHead from '../../components/HomeHead'
import Category from '../../components/HomeContent/Category'
import HomeAd from './subpages/HomeAd'
import HomeList from './subpages/HomeList'
import Footer from '../../components/Footer'

class HomePage extends Component {
    render() {
        const { userinfo: { cityname }, history } = this.props
        return (
            <div>
                <div className="main">
                    <HomeHead cityname={cityname} history={history} />
                    <Category />
                    <HomeAd />
                    <HomeList cityname={cityname} />
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { userinfo: state.userinfo}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)