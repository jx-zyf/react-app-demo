import { get } from './request'

export function getSearchListData(cityname, category, keyword, page) {
    return get(`http://localhost:8000/data/search/${encodeURIComponent(cityname)}/${encodeURIComponent(category)}/${encodeURIComponent(keyword)}/${page}`)
}