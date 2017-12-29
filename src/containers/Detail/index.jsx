import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

import Header from '../../components/Header'
import DetailInfo from './subpages/DetailInfo'
import Buy from './subpages/Buy'
import DetailComment from './subpages/DetailComment'
import Footer from '../../components/Footer'

class Detail extends Component {
    goBack = () => {
        const { history, userinfo: { flag }, userinfoActions: { flagFun } } = this.props
        if (flag) {
            history.go(-3)
            flagFun(false)
        } else {
            history.goBack()
        }
    }
    render() {
        const { history, match: { params: { id } }  } = this.props
        return (
            <div>
                <div className="main">
                    <Header title="商户详情" goBack={this.goBack} />
                    <DetailInfo id={id} />
                    <Buy id={id} history={history} />
                    <DetailComment id={id} />
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { userinfo: state.userinfo }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)