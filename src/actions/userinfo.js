import { USERINFO_UPDATE, TOGGLE_FLAG } from '../config.js'

export function update(data) {
    return {
        type: USERINFO_UPDATE,
        data: { ...data }
    }
}

export function flagFun(data) {
    return {
        type: TOGGLE_FLAG,
        data
    }
}