# AutoCache

localStorage本地存储，这仅仅是对localstorage进行了一些简单的包装，方便工作中使用

[演示地址](https://dctxf.github.io/auto-cache/)

## Usage

页面引入js

```html
<script src="index.js"></script>
```

然后初始化

```html
<script>
var autoCache = new AutoCache('history', 2);
</script>
```


## Features

- 缓存
- 读取
- 移除
- 清除

## API

### options

#### new AutoCache(name,maxLength)

- name 必选 默认key值
- 最大长度 可选 默认300


### methods

一些方法

#### .check()

判断是否支持

- 支持返回`true`
- 不支持返回`false`

#### .get(name)

获取本地存储

- `name` 参数可选 默认为初始化key值

#### .set(name,item)

增加新值

- `name` 可选 默认初始化key值
- `item` 必选 value值

#### .put(name,item)

添加记录

- `name` 参数可选 默认为初始化key值
- `item` 必选 增加新值

#### .remove(name)

删除本地记录

- `name` 可选 默认为初始化key值

#### .clear()

**慎用！！！慎用！！！慎用！！！** 

清楚本地所有localStorage

