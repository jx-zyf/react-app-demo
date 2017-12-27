import { USERINFO_UPDATE } from '../config'
import localStorage from '../util/localStorage'

const citynmame = localStorage.getItem('cityname') ? localStorage.getItem('cityname') : '北京'
const initialState = {cityname: citynmame}

export default function userinfo (state = initialState, action) {
    const { type, data } = action
    switch (type) {
        case USERINFO_UPDATE:
            return { ...state, cityname: data }
        default:
            return state
    }
}