$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-1192px"},4000)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 말본
    $("#mlb_box").mouseenter(function(){
        $("#mlb > li").stop().animate({marginTop:"-2144px"},6000)
    }).mouseleave(function(){
        $("#mlb > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 켈로그
    $("#cafe_box").mouseenter(function(){
        $("#cafe > li").stop().animate({marginTop:"-3510px"},8000)
    }).mouseleave(function(){
        $("#cafe > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 얌테이블
    $("#vittz_box").mouseenter(function(){
        $("#vittz > li").stop().animate({marginTop:"-1615px"},4000)
    }).mouseleave(function(){
        $("#vittz > li").stop().animate({marginTop:"0px"},3000)
    })
})
