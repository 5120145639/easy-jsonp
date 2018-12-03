const jsonp = ({
    url = '',
    params = {},
    callback = {},
    timeout = 6000
}) => {
    let script = document.createElement('script')
    let timer = null
    let time = (new Date()).getTime()
    callback.key = callback.key || 'callback'
    callback.id = callback.id + time || '__jp' + time
    url = normalizedUrl(url, params, callback)
    document.head.appendChild(script)
    script.src = url
    function cleanUp() {
        timer && clearTimeout(timer)
        document.head.removeChild(script)
        window[callback.id] = null
    }
    return new Promise((resolve, reject) => {
        if (timeout) {
            timer = setTimeout(() => {
                reject(new Error('timeout'))
                cleanUp()
            }, timeout)
        }
        window[callback.id] = function(data) {
            resolve(data)
            cleanUp()
        }
    })
}
function normalizedUrl(url, params, callback) {
    url += ~url.indexOf('?') ? '&' : '?'
    for (let key in params) {
        url += `${key}=${encodeURIComponent(params[key])}&`
    }
    url += `${callback.key}=${callback.id}`
    url.replace('?&', '?')
    return url
}