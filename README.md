# VUE Email 自动填充

## 使用步骤：
>1.安装
```
npm i v-email --save
```
>2.引入
```
import vEmail from 'v-email'
Vue.use(vEmail)
```
>3.使用
```
 <v-email @email_data='getEmail'></v-email>
```
+ className:上层样式
+ childClassName：提示样式
+ 父节点获取email内容：@email_data
+ 初始化email内容：initEmail
+ emailSuffixs: 提示默认后缀

![v-email](https://bt-cloud-platform.oss-cn-shanghai.aliyuncs.com/avatar/v-email-gif.gif)
