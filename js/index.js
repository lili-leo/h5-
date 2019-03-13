$(function () {
    //初始化组件
    //设置屏幕对齐方式，默认垂直居中
    //设置导航可见
    $(".contioner").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function (link,index) {
            console.log(index);
            $(".section").eq(index-1).addClass("now");
        },
        onLeave:function (index,nextIndex,direction) {
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved');
        }},
        afterRender:function () {
            $(".more").on("click", function () {
                $.fn.fullpage.moveSectionDown();
            })
        },
        // onLeave:function (index, nextIndex,direction) {
        //      if(index==2 && nextIndex==3){
        //          // 当前第二页到第三页
        //          $(".section").eq(index-1).addClass("leaved");
        //      }
        // }
         // afterRender:function () {
            /*console.log(this);*/
            /*this没有api方法*/

            /*jquery插件初始的时候封装这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
            /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
            /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁 */
            /*点击更多切换下一页*/
            // $('.more').on('click',function () {
            //     $.fn.fullpage.moveSectionDown();
            // });
        /*页面切换的时间 默认是700*/
        scrollingSpeed:1000
    });
});

/*设置屏幕对齐方式，默认垂直居中
设置导航可 */