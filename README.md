# easy-jsonp
自己模仿写的，支持promise
# 使用方法
```
jsonp({
    url,
    params: data,
    callback: {
        key: 'jsonpCallback'
    }
}).then((res) => {
    console.log(res.data)
})
```
