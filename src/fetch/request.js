import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    return fetch(url, {
        // credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    })
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    let result = '', item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    console.log(result)
    // if (result) {
    //     result = result.slice(1);
    // }
    result = result.length > 0 ? result.slice(1) : result;
    return result;
}

export function post(url, paramsObj) {
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
}