import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { message } from '../../util/message'

import * as userinfoActions from '../../actions/userinfo'
import localStorage from '../../util/localStorage'

import { LoginPost } from '../../fetch/login'

class Login extends Component {
    state = {
        isLogin: false
    }
    componentDidMount() {
        const { userinfo: { username } } = this.props
        if(username) {
            this.setState({
                isLogin: true
            })
            this.goUser()
        }
    }
    goUser = () => {
        const { history, match: { params }, userinfoActions: { flagFun } } = this.props
        const { router, id } = params
        if (router && id) {
            history.push(`/${router}/${id}`)
            flagFun(true)
        } else {
            history.push('/user')
        }
    }
    loginHandle = (username, password) => {
        const _this = this
        const { userinfoActions: { update } } = this.props
        LoginPost(username, password)
            .then(res => 
                res.json()
            )
            .then(json => {
                const { status, msg } = json
                if(status === 1) {
                    _this.setState({
                        isLogin: true
                    })
                    update({username: username})
                    localStorage.setItem('username', username)
                    const { isLogin } = _this.state
                    if(isLogin) {
                        _this.goUser()
                    }
                } else {
                    _this.setState({
                        isLogin: false
                    })
                }
                message(msg);
            })
    }
    render() {
        const { history } = this.props
        const { isLogin } = this.state
        return (
            <div>
                <Header title="登录" goBack={history.goBack} />
                <div>
                    {!isLogin &&
                        <LoginComponent loginHandle={this.loginHandle} />
                    }
                </div>
            </div>
        )
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
)(Login)