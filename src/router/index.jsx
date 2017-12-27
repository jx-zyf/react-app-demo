import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'

class RouterMap extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/city' component={City}/>
                    <Route path='/search/:category/:keyword' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    {/* <Route path='/Login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='*' component={NotFound}/> */}
                </div>
            </HashRouter>
        )
    }
}

export default RouterMap
