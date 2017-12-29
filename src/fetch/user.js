import { get } from './request'

export function getCollect(id) {
    return get(`http://localhost:8000/data/collect/${id}`)
}

export function getOrderList() {
    return get(`http://localhost:8000/data/orderList`)
}