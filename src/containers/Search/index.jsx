import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchHead from '../../components/Search/SearchHead'
import SearchList from './subpages/SearchList'
import Footer from '../../components/Footer'

class Search extends Component {
    goBack = () => {
        const { history } = this.props;
        history.goBack()
    }
    render() {
        const { match: { params }, userinfo: { cityname }, history } = this.props
        return (
            <div>
                <div>
                    <SearchHead goBack={this.goBack} params={params} history={history} />
                    <SearchList cityname={cityname} params={params} />
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
)(Search)