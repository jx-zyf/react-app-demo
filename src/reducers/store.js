import { TOOGLE_STORE } from '../config.js'

const initialState = [
    {id: 1001, isStore: false},
    {id: 1002, isStore: false},
    {id: 1003, isStore: false},
    {id: 1004, isStore: false},
    {id: 1005, isStore: false},
    {id: 10001, isStore: false},
    {id: 10002, isStore: false},
    {id: 10003, isStore: false},
    {id: 10004, isStore: false},
    {id: 10005, isStore: false},
    {id: 10006, isStore: false},
    {id: 10007, isStore: false}
]

export default function store (state = initialState, action) {
    const { type, data } = action
    switch (type) {
        case TOOGLE_STORE:
            state.forEach(item => {
                if (item.id === data.id) {
                    item.isStore = data.isStore
                }
            })
            return state
        default:
            return state
    }
}