**ScriptOj.com**练习 答案仅供参考  所有题目均来自scriptoj.com 如有侵权请通知立即删除

Easy：(不包括React相关)

/#26 分页判断

数据的分页在我们的业务当中非常常见，例如 ScriptOJ 的问题列表就有分页。

完成分页函数 `getPages`，接收两个参数：

```
getPages(total, itemsPerPage)
```

- `total`： 表示总共有多少条数据
- `itemsPerPage`：表示每页有多少条数据

`getPages(total, itemsPerPage)` 会告诉我们需要有多少页数据。例如，总共 101 条数据，每页有 10 条，就需要 11 页。

`itemsPerPage` 为 `0` 的时候返回 `0`。

你只需要完成 `getPages` 函数。

```
const getPages = (total, itemsPerPage) => 

{

if(itemsPerPage==0){

  return 0;

}else{

  return Math.ceil(total/itemsPerPage);

}

}

```





/#28 韩梅梅拒绝了李雷

韩梅梅拒绝了李雷，李雷伤心地问韩梅梅，你到底喜欢怎么样的男生。韩梅梅说，她喜欢又高、又富、又帅的男生。

假设现在页面上有很多个 `div` 元素代表不同的男生，类名表示他们具有的特性，例如 `tall` 表示高，`wealthy` 表示富，`handsome` 表示帅。

请你完成 CSS， 给韩梅梅喜欢的男生加上红色的边框（`1px solid red`）。

```
div.tall.wealthy.handsome{
  border:1px solid red;
}
```





/#19 获取文件的扩展名

完成 `extname` 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。

例如，输入 `emoji.png`，返回 `.png`。

```
const extname = (filename) => {
if ((filename.length-filename.lastIndexOf('.')<2)||(filename.lastIndexOf('.')<1))
{
  return ''
  
}
else
{
return filename.substring(filename.lastIndexOf('.'),filename.length)
}
}
```





/#20 正则表达式删除两端多余空白字符

完成正则表达式 `TRIM_REGX`，可以用它来删除一个字符串前后多余的空白字符。

例如：

```
' ScriptOJ   '.replace(TRIM_REGX, '') // => ScriptOJ

```

注意：你只需要完成正则表达式的编写。

```
const TRIM_REGX = /* TODO */
/(^\s*)|(\s*$)/g
```





/#21 16进制颜色值转RGB值

完成函数 `hexToRGB`，它的作用将 16 进制颜色值转换成 RGB 值：

```
hexToRGB('#F0F0F0') // => rgb(240, 240, 240)
hexToRGB('#9fc') // => rgb(153, 255, 204)
hexToRGB('无效颜色') // => null
```

