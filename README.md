# Apple-like-Slideshow-Gallery-for-33
## 有一个bug
* 该代码在http-server启动的时候正常显示。但是在github上面第一次预览地址点击后有些JS代码没有加载到，导致一些异常。需要**刷新**后才可以正常加载JS代码，不知道问题在哪里。
* 把ready函数删除，因为不删除会导致timer会多出一次，会从2开始到4然后5,6,7.....
* 代码开始的时候为了防止最开始滑动就使用增加如下.hide().offset()，然后show()
```
        $(slides).css('transform', 'translateX(-920px)').hide().offset()
        $(slides).show()
```
