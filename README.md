# easy-jsonp
jsonp跨域实现
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
