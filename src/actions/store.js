import { TOOGLE_STORE } from '../config.js'

export function toggle(data) {
    return {
        type: TOOGLE_STORE,
        data: { ...data }
    }
}