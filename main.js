$(document).ready(function () {
    var intiImgeLength = $('#slides img').length
    var current = 0
    var next

    //初始化函数
    function init() {
        $(slides).css('transform', 'translateX(-920px)')
        var cloneImgLast = $('#slides  img').eq(intiImgeLength - 1).clone(true)
        var cloneImg0 = $('#slides  img').eq(0).clone(true)
        $('#slides').prepend(cloneImgLast)
        $('#slides').append(cloneImg0)
        $('#menu li').eq(0).addClass('act');
        $('#menu li').eq(0).siblings().removeClass('act')
    }

    let timer = intervalSlide()
    function intervalSlide() {
        return setInterval(() => {
            gotoIndex(current + 1)
        }, 2000)
    }

    //调用初始化函数
    init()
    //鼠标进入图片和li都会停止滚动，鼠标离开图片和li都会重新开始滚动
    stopOrBegin()
    //点击li进入指定某张图片
    gotoIndexI()
    //点击li进入下一张图片
    // gotoIndexNext()
    //点击li进入上一张图片
    // gotoIndexLast()
    //离开页面轮播滚动停止，打开并显示该页面轮播滚动继续原位置开始
    leavePageStopOrBegin()



    //下面的函数和核心代码，代表当前current的是0开始，下一个是去当前current的关系，+1代表正向，-1代表倒着走
    function gotoIndex(next) {//这里把next设置为加1,为正向滚动，当然可以设置成减1，这样就可以倒着滚动轮播。
        //方方老师的主要是current就是当前的索引，当前第几张图，current+1就是下一张图的索引，也就是下一张图片就是就几+1张。
        if (next > intiImgeLength - 1) {
            next = 0
        }//该if是用在向右边滚动的的时候使用，因为是+1，那么就会超过长度，就需要调回第一个，也就是索引为0
        if (next < 0) {
            next = intiImgeLength - 1
        }//该if是用在向左边滚动的的时候使用，也就是倒着滚动，因为是-1，那么就会小于0，就需要调回第最后一个，也就是索引为length-1
        // if (next <= 2) {
        if (current === 0 && next === intiImgeLength - 1) {
            // slides.addEventListener('click', function () {
            $(slides).css('transform', 'translateX(0px)')
                .one('transitionend', function () {
                    $(slides).css({ 'transform': `translateX(-${(intiImgeLength) * 920}px)` }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                    $(slides).show()
                })
            // })
            $('#menu li').eq(next).addClass('act');
            $('#menu li').eq(next).siblings().removeClass('act')
        }
        else if (current === intiImgeLength - 1 && next === 0) {
            $(slides).css('transform', `translateX(-${(intiImgeLength + 1) * 920}px)`)
                .one('transitionend', function () {
                    $(slides).css({ 'transform': `translateX(-${(next + 1) * 920}px)` }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                    $(slides).show()
                })
            $('#menu li').eq(next).addClass('act');
            $('#menu li').eq(next).siblings().removeClass('act')
        }
        else {
            // slides.addEventListener('click', function () {
            $(slides).css('transform', `translateX(-${(next + 1) * 920}px)`)
            // })
            $('#menu li').eq(next).addClass('act');
            $('#menu li').eq(next).siblings().removeClass('act')
        }
        // else if (current === 1 && next === 2) {
        //     // slides.addEventListener('click', function () {
        //     $(slides).css('transform', 'translateX(-1200px)')
        //     console.log(`-1200px`)
        //     console.log(`-${(next+1)*920}px`)
        //     console.log('1到2')
        // })
        // }
        // }
        current = next
    }
    // $(document).ready(function () {
    // setTimeout(() => {
    //     // slides.addEventListener('click',function(){
    //     $(slides).css('transform', 'translateX(-800px)')
    //     // })
    //     current=2
    // }, 2000)

    // setTimeout(() => {
    //     // slides.addEventListener('click',function(){
    //     $(slides).css('transform', 'translateX(-1200px)')
    //     // })
    //     current=3
    // }, 4000)

    // setTimeout(() => {
    //     // slides.addEventListener('click',function(){
    //     $(slides).css('transform', 'translateX(-1600px)')
    //         .one('transitionend', function () {
    //             $(slides).css({ 'transform': 'translateX(-920px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
    //             $(slides).show()
    //         })
    //     current=1
    //     // })
    // }, 6000)
    // })

    // setTimeout(() => {
    //     // slides.addEventListener('click',function(){
    //     $(slides).css('transform', 'translateX(0px)')
    //         .one('transitionend', function () {
    //             $(slides).css({ 'transform': 'translateX(-1200px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
    //             $(slides).show()
    //         })
    //     current = 2
    //     // })
    // }, 2000)
    // // })

    // $('li').eq(0).on('click', function () {
    //     gotoIndex(0)
    //     console.log('firstbutton'+current)
    // })

    // $('li').eq(1).on('click', function () {
    //     gotoIndex(1)
    //     console.log('firstbutton'+current)
    // })

    // $('li').eq(2).on('click', function () {
    //     gotoIndex(2)
    //     console.log('firstbutton'+current)
    // })

    //鼠标进入图片和li都会停止滚动，鼠标离开图片和li都会重新开始滚动
    function stopOrBegin() {
        $('.control2>li').on('mouseenter', function () {
            clearInterval(timer)
        })

        $('.control2>li').on('mouseleave', function () {
            timer = intervalSlide()
        })

        $('.slides>img').on('mouseenter', function () {
            clearInterval(timer)
        })

        $('.slides>img').on('mouseleave', function () {
            timer = intervalSlide()
        })
    }

    //点击li进入指定某张图片
    function gotoIndexI() {
        for (let i = 0; i < intiImgeLength; i++) {
            $('.control2 > li').eq(i).on('click', function () {
                gotoIndex(i)
            })
        }
    }

    //点击li进入下一张图片
    // function gotoIndexNext() {
    //         $('.control1 > li').eq(0).on('click', function () {
    //             gotoIndex(current-1)
    //         })
    // }

    //点击li进入上一张图片
    // function gotoIndexLast() {
    //     $('.control1 > li').eq(1).on('click', function () {
    //         gotoIndex(current+1)
    //     })
    // }

    //离开页面轮播滚动停止，打开并显示该页面轮播滚动继续原位置开始
    function leavePageStopOrBegin() {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                clearInterval(timer)
            }
            else {
                timer = intervalSlide()
            }
        })
    }


});

