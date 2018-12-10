# easy-jsonp
jsonp跨域实现
## 使用方法
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
## 传入参数值
以qq音乐手机版官网的轮播图url请求为例
```
const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
```
params 传入的是拼接到url后面的参数值
```
const data = {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
}
```
callback 是个对象包含两个属性
```
callback = {
    key: callback函数对应的key值
    id: callback函数名（默认为__jp + time）
}
```

