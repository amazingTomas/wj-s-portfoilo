$("document").ready(function(){
    AOS.init();

    $(".header .nav ul li").eq(3).addClass("on")


    let count = 0;
    $(window).on("mousewheel DOMMouseScroll", function(e){
        let delta=e.originalEvent.wheelDelta;
        let firefox=e.originalEvent.detail;
        // firefox -해당 브라우저가 아니면 확인할 수 없음
        // console.log(delta)
        
        if($("html, body").is(":animated")){
            return
        } //세게 막 돌려도 하나씩 가지게하는 코드 --마구동작하는것 막는코드
        
        // 휠을 내리면 -값이 나오고 올리면 정상값이 나온다.
        if(delta<0 || firefox<0){
            //휠 내린거
            count++;
            if(count>$(".section").length-1){
                count=$(".section").length-1;
            }
        }else{
            //휠 올린거
            count--;
            if(count<0){
                count=0;
            }
        }
        console.log(count)


        $("html,body").stop().animate({
            scrollTop: $(".section").height()*count
        },1000) //section 하나씩 스크롤되게 하는 코드

    }) //마우스 wheel 이벤트

    $("body").swipe({
        swipe: function(event, direction){
            if($(".section").is(":animated")){
                return
            }
            if(direction=="up"){
                count++;
                if(count>$(".section").length-1){
                    count=$(".section").length-1;
                }

            }else if(direction=="down"){
                count--;
                if(count<0){
                    count=0;
                }

            }else if(direction=="left"){
            }else if(direction=="right"){   
            }

            $("html,body").stop().animate({
                scrollTop: $(".section").height()*count
            },1000)
        }
    })


    

    $(".section .left .picture-content .img-box").mouseover(function(){
        $(".section .left .picture-content .img-box img").hide().eq(1).show();
    })
    $(".section .left .picture-content .img-box").mouseout(function(){
        $(".section .left .picture-content .img-box img").hide().eq(0).show();
    })


    $(".section .right .art-content .img-box").mouseover(function(){
        $(".section .right .art-content .img-box img").hide().eq(1).show();
    })
    $(".section .right .art-content .img-box").mouseout(function(){
        $(".section .right .art-content .img-box img").hide().eq(0).show();
    })


    $(".section .right .pet-content .img-box").mouseover(function(){
        $(".section .right .pet-content .img-box img").hide().eq(1).show();
    })
    $(".section .right .pet-content .img-box").mouseout(function(){
        $(".section .right .pet-content .img-box img").hide().eq(0).show();
    })









})