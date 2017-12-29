import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as storeActions from '../../../actions/store'

import BuyAndStore from '../../../components/Buy'

class Buy extends Component {
    state = {
        isStore: false
    }
    componentDidMount() {
        this.getStoreState()
    }
    getStoreState = () => {
        const { store } = this.props
        let id = parseInt(this.props.id, 10)
        var isStore = store.filter(item => 
            item.id === id
        )[0].isStore
        this.setState({
            isStore: isStore
        })
    }
    storeHandle = () => {
        const { userinfo: { username }, storeActions: { toggle }, id, history } = this.props
        const _this = this
        if (username) {
            this.setState({
                isStore: !_this.state.isStore
            })
            setTimeout(function(){
                toggle({
                    id: parseInt(id, 10),
                    isStore: _this.state.isStore
                })
            }, 0)
        } else {
            history.push(`/login/detail/${id}/`)
        }
    }
    buyHandle = () => {
        const { userinfo: { username }, id, history } = this.props
        if (username) {
            window.open('http://linxunzyf.cn', '_blank')
        } else {
            history.push(`/login/detail/${id}/`)
        }
    }
    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} storeHandle={this.storeHandle} buyHandle={this.buyHandle} />
        )
    }
}

function mapStateToProps(state) {
    return { userinfo: state.userinfo, store: state.store }
}

function mapDispatchToProps(dispatch) {
    return { storeActions: bindActionCreators(storeActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)