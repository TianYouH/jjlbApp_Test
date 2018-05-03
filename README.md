# jj测试工程

## 第一次启动工程

```bash
    yarn install
    react-native run-android
    npm start
```

## 问题排除

1. debug模式下报跨域问题

这个连接 [就是](https://github.com/facebook/react-native/issues/17618)解决方案。
Did some digging, and found that if I modify https://github.com/facebook/metro/ _processDeltaRequest to include
`mres.setHeader("Access-Control-Allow-Origin", "*");`
it works. I don't believe this is enough to fix the issue though.
