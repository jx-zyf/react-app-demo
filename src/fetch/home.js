import { get } from './request'

export function getAdData() {
    return get('http://localhost:8000/data/homead')
}

export function getListData(cityname, page) {
    return get(`http://localhost:8000/data/homelist/${encodeURIComponent(cityname)}/${page}`)
}