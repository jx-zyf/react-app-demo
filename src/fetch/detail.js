import { get } from './request'

export function getInfoData(id) {
    return get(`http://localhost:8000/data/detail/info/${id}`)
}

export function getCommentData(id, page) {
    return get(`http://localhost:8000/data/detail/comment/${id}/${page}`)
}