import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import RouterMap from './router'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './static/css/common.less'
import './static/css/font.css'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
