import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import DetailInfo from './subpages/DetailInfo'
import DetailComment from './subpages/DetailComment'
import Footer from '../../components/Footer'

class Detail extends Component {
    render() {
        const { history, match: { params: { id } } } = this.props
        return (
            <div>
                <div className="main">
                    <Header title="商户详情" goBack={history.goBack} />
                    <DetailInfo id={id} />
                    <DetailComment id={id} />
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)