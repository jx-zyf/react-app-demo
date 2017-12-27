import { USERINFO_UPDATE } from '../config.js'

export function update(data) {
    return {
        type: USERINFO_UPDATE,
        data
    }
}