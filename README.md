# easy-jsonp
jsonp跨域实现
## 传入参数值
以qq音乐手机版官网的轮播图url参数为例
```
const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
```
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
