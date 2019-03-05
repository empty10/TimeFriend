
$.ajax({
    url: "type",
    data:1,
    success: function (a) {
        $.ajax({
            url: "list",
            data:a,
            success: function (b) {
                $.ajax({
                    url: "content",
                    data:b,
                    success: function (c) {
                        console.log(c)
                    }
                })
            }
        })
    }
})



// 1、无法捕获try  catch
// 2、没有return
// 3、回调地狱
