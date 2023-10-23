// 그림일기 js

$(function(){

    var array = ["HTML / CSS", "Responsive web / Media query", "Javascript", "Jquery", "Json / Ajax", "Open Api", "React", "Typescript"];

    var originalText = $("#drawing").text();

    





    // 첫번쩨
    $("#g1 > li > span:first").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:first").show();

        $("#drawing").text(array[0]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:first").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 두번쩨
    $("#g1 > li:nth-child(2) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(2)").show();

        $("#drawing").text(array[1]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(2)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");
    })


    // 세번쩨
    $("#g1 > li:nth-child(3) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(3)").show();

        $("#drawing").text(array[2]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(3)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 네번쩨
    $("#g1 > li:nth-child(4) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(4)").show();

        $("#drawing").text(array[3]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(4)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 다섯번쩨
    $("#g1 > li:nth-child(5) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(5)").show();

        $("#drawing").text(array[4]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(5)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 여섯번쩨
    $("#g1 > li:nth-child(6) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(6)").show();

        $("#drawing").text(array[5]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(6)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 일곱번쩨
    $("#g1 > li:nth-child(7) > span").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:nth-child(7)").show();

        $("#drawing").text(array[6]);

       

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:nth-child(7)").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })



    // 마지막
    $("#g1 > li > span:last").mouseover(function(){

        $("#hello").hide();

        $("#diary_box > li:last").show();

        $("#drawing").text(array[7]);

        

    }).mouseout(function(){

        $("#hello").show();

        $("#diary_box > li:last").hide();

        $("#drawing").text(originalText);

        $(".MouseOn").css("opacity","100");

    })

















});