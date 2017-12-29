import React from 'react'

import './style.less'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        const { username, password } = this.state
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        type="text" 
                        placeholder="输入用户名" 
                        onChange={this.changeHandle1} 
                        value={username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <input 
                        type="password" 
                        placeholder="输入密码"
                        onChange={this.changeHandle2} 
                        value={password}
                    />
                </div>
                <button className="btn-login" onClick={this.clickHandle}>登录</button>
            </div>
        )
    }
    changeHandle1 = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changeHandle2 = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    clickHandle = () => {
        const { username, password } = this.state
        const { loginHandle } = this.props
        loginHandle(username, password);
    }
}

export default Login