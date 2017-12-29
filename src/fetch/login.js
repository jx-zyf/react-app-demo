import { post } from './request'

export function LoginPost(username, password) {
    const obj = {
        username,
        password
    }
    return post('http://localhost:8000/data/login', obj)
}