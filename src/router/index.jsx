import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import User from '../containers/User'
import NotFound from '../containers/404'

class RouterMap extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/city' component={City}/>
                    <Route path='/search/:category/:keyword' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login/:router?/:id?' component={Login}/>
                    <Route path='/user' component={User}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterMap
