$(function(){
    // 初始化页面
     init();
    // 嘿一嘿 触摸点击事件

    $(".hei").on("tap",function() {
        $(".heiFlash").addClass("heiFlashActive");
        $(".heiFlash2").addClass("heiFlashActive2");
        setTimeout(function(){
            $(".interStr").removeClass("hideStr");
            $(".tanBox").css("display","block");
            $(".heiFlash").removeClass("heiFlashActive");
            $(".heiFlash2").removeClass("heiFlashActive2");
        },3000);
    });


    //按钮列表点击事件

    // 我的积分
    $(".interLi").on("tap",function(){
        init();
        $(".interLi").find("img").attr("src","img/inter2.png");
    });


    // 我的话费
    $(".phoneLi").on("tap",function(){
        init();
        $(".phoneLi").find("img").attr("src","img/phone2.png");
    });

    // 我的激活码
    $(".codeLi").on("tap",function(){
        init();
        $(".codeLi").find("img").attr("src","img/code2.png");
    });

    //页面初始化  封装函数
    function init(){
        $(".interLi").find("img").attr("src","img/inter1.png");
        $(".phoneLi").find("img").attr("src","img/phone1.png");
        $(".codeLi").find("img").attr("src","img/code1.png");
        $(".tanBox").css("display","none");
        $(".conStr").addClass("hideStr");
        $(".heiFlash").removeClass("heiFlashActive");
    }

    // 点击关闭按钮
    $(".closeBtn").on("tap",function(){
        init();
    });


});
