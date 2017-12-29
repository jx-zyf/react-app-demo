import { USERINFO_UPDATE, TOGGLE_FLAG } from '../config'
import localStorage from '../util/localStorage'

const cityname = localStorage.getItem('cityname') ? localStorage.getItem('cityname') : '北京'
const username = localStorage.getItem('username') ? localStorage.getItem('username') : ''
const initialState = {
    cityname: cityname,
    username: username,
    flag: false
}

export default function userinfo (state = initialState, action) {
    const { type, data } = action
    switch (type) {
        case USERINFO_UPDATE:
            return { ...state, ...data }
        case TOGGLE_FLAG:
            return { ...state, flag: data}
        default:
            return state
    }
}