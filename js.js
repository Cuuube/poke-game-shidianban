$(document).ready(function(){
    $("#resultD").hide();
    $("#opponentD").hide();
    $("#ruleD").hide();
    $("#wayToPlayD").hide();
    $("#howToPlayD").hide();
    $("#animaCard").hide();
    $("#shadowD").hide();
    $("#opp3D").hide();
    $("#resultD").click(function(){
        restart();
    });
    $("#discard_pile").click(function(){
        giveCard();
    });
    
    $("#endB").click(function(){
        toEnd();
    });
    $("#opponentB").click(function(){
        $("#opponentD").slideToggle(200);
        $("#info").text("您与"+AIName[(AIModel-1)]+"的对战中胜利"+youWinTimes+"次，失败"+youLoseTimes+"次，平局"+tieScoreTimes+"次。选择对手后成绩清零。");
        
    });
    $("#opp1").click(function(){
        $("#opp3D").hide();
        $("#opp2").css("border","2px solid rgb(54,83,44)");
        $("#opp3").css("border","2px solid rgb(54,83,44)");
        $("#opp1").css("border","2px solid rgb(81,55,30)");
        AIModel = 1;
        clearTimes();
        $("#opponentD").slideToggle(200);
    });
    $("#opp2").click(function(){
        $("#opp3D").hide();
        $("#opp1").css("border","2px solid rgb(54,83,44)");
        $("#opp3").css("border","2px solid rgb(54,83,44)");
        $("#opp2").css("border","2px solid rgb(81,55,30)");
        AIModel = 2;
        clearTimes();
        $("#opponentD").slideToggle(200);
    });
    $("#opp3").click(function(){
        $("#opp3D").show();
        $("#opp2").css("border","2px solid rgb(54,83,44)");
        $("#opp1").css("border","2px solid rgb(54,83,44)");
        $("#opp3").css("border","2px solid rgb(81,55,30)");
        AIModel = 3;
        clearTimes();
        $("#opponentD").slideToggle(200);
    });
    $("#ruleB").click(function(){
        $("#ruleD").slideToggle(200);
    });
    $("#wayToPlayB").click(function(){
    //    $("#wayToPlayD").slideToggle(200);
        $("#howToPlayD").slideToggle(200);
    });
    $("#endW").click(function(){
        toExit();
    });
    $("#loadingD").click(function(){
        $("#loadingD").hide();
        $("#shadowD").show();
        $("#discard_pile_bottom img").attr("src","./pukeImage/discard_pile2.png");
        $("#endB").val("不要了");
        $("#opponentB").val("对手");
        $("#ruleB").val("规则");
        $("#wayToPlayB").val("操作");
        $("#endW").val("退出");
    });
    
});
//      定义一个牌组并且有抽出，复原功能
var cards = [];
for (var i=0;i<54;i++){
    cards.push(i);
}
//puts(cards);
var cardsPoint = [0.5,0.5,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2];
var yourCards = [];          //对手抽过的卡，用于最后亮牌用
var myCards =[];
var myPoint = 0;            //自己的点数和
var yourPoint = 0;          //对手的点数和
var Win;
var takedCard;
var times = 0;               //发牌次数，没玩时为0，每发一张牌加1，到5时不能再发牌，游戏结束。
var gameOver = false;
var AIDeside = true;        //AI判断 true为继续要卡，false为不再要卡了
var IDeside = true;        //我判断 true为继续要卡，false为不再要卡了，用于迅速结束

var youWinTimes;
var youLoseTimes;
var tieScoreTimes;
function clearTimes(){
    youWinTimes = 0;
    youLoseTimes = 0;
    tieScoreTimes = 0;
}
clearTimes();
function giveCard(){
    // if(gameOver == true){
        // return false;
    // }
    //////////////////我方回合////////////////////////////////////////
    if(IDeside){
        var ran1 = Math.floor(cards.length*Math.random());
        myCards.push(cards[ran1]);
        if(check()){
            return false;
        }
        myPoint += cardsPoint[ran1];
        
        //抽卡动画transform:'rotate(90deg)'
        //$("#animaCard").show();
        // $("#animaCard").css("animation","animaCardA 2s");
        $("#myTable img:eq("+times+")").attr("src","./pukeImage/"+(cards[ran1]+1)+".jpg");
        puts("本张牌分数是"+cardsPoint[ran1]+"，您的点数和是"+myPoint+"分。牌堆还剩下"+(cards.length-1)+"张牌。");
        cards.splice(ran1,1);            //抽出牌
        cardsPoint.splice(ran1,1);       //抽出牌对应的点数数组
    }
    
    //////////////////对方回合/////////////////////////////////////////
    if(check()){
        times++;
        return false;
    }
    if (AIDeside){
        
    
        var ran2 = Math.floor(cards.length*Math.random());
        yourCards.push(cards[ran2]);
        yourPoint += cardsPoint[ran2];
        $("#yourTable img:eq("+times+")").attr("src","./pukeImage/back.jpg");
        puts("本张牌分数是"+cardsPoint[ran2]+"，对方的点数和是"+yourPoint+"分。牌堆还剩下"+(cards.length-1)+"张牌。");
        cards.splice(ran2,1);            //抽出牌
        cardsPoint.splice(ran2,1);       //抽出牌对应的点数数组
    }   
        times++;
        check();
}
function check(){
    if (times >= 5){
        result();
        return true;
    }
    if ((myPoint >= 10.5)||(yourPoint >= 10.5)){        //任意一方点数超过十点半立即结束游戏
        result();
        return true;
    }
    if (cards.length <= 0){           //牌没了重新洗牌
        cards = [];
        for (var i=0;i<54;i++){
            cards.push(i);
        }
    }
    AIThought();                        //每一个检查点都给AI一次判断机会
}


function result(){
    gameOver = true;
    for(var i=0;i<yourCards.length;i++){
        $("#yourTable img:eq("+i+")").attr("src","./pukeImage/"+(yourCards[i]+1)+".jpg");
    }
    if (myPoint == 10.5){
        $("#resultD h1").text("YOU WIN!");
    }else if (yourPoint == 10.5){
        $("#resultD h1").text("YOU LOSE!");
    }else if ((myPoint < 10.5) && (yourPoint < 10.5) && (myCards.length == 5)){
        $("#resultD h1").text("YOU WIN!");
    }else if ((myPoint < 10.5) && (yourPoint < 10.5) && (yourCards.length == 5)){
        $("#resultD h1").text("YOU LOSE!");
    }else if ((myPoint < 10.5) && (yourPoint < 10.5) && (myPoint == yourPoint)){
        $("#resultD h1").text("A TIE SCORE!");
    }else if ((myPoint < 10.5) && (yourPoint < 10.5) && (myPoint < yourPoint)){
        $("#resultD h1").text("YOU LOSE!");
    }else if ((myPoint < 10.5) && (yourPoint < 10.5) && (myPoint > yourPoint)){
        $("#resultD h1").text("YOU WIN!");
    }else if ((myPoint < 10.5) && (yourPoint > 10.5)){
        $("#resultD h1").text("YOU WIN!");
    }else{
        $("#resultD h1").text("YOU LOSE!");
    }
    if ($("#resultD h1").text() == "YOU LOSE!"){
        $("#resultD h1").css("color","#f44");
        youLoseTimes++;
        puts("失败增加了！");
    }else if ($("#resultD h1").text() == "A TIE SCORE!"){
        $("#resultD h1").css("color","rgb(244,244,244)");
        tieScoreTimes++;
        puts("平局增加了！");
    }else{
        $("#resultD h1").css("color","rgb(246,244,50)");
        youWinTimes++;
        puts("胜利增加了！");
    }
    puts("您的点数是："+myPoint+"分。对方的点数是"+yourPoint+"分。");
    $("#resultD").show(100);
}

function restart(){
    gameOver = false;
    myPoint = 0;
    yourPoint = 0;
    times = 0;
    AIDeside = true;
    IDeside = true;
    myCards =[];
    yourCards = [];
    cards =[];
    for (var i=0;i<54;i++){
        cards.push(i);
    }
    cardsPoint = [0.5,0.5,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2,3,4,5,6,7,8,9,10,0.5,0.5,0.5,1,2];
    for(var i=0;i<5;i++){
        $("#myTable img:eq("+i+")").attr("src","./pukeImage/blank.png");
        $("#yourTable img:eq("+i+")").attr("src","./pukeImage/blank.png");
    }
    $("#resultD").hide(100);
}
function toEnd(){
    if(myCards.length == 0){
        alert("您应该先摸一张牌！");
        return false;
    }
    IDeside = false;
    while((times <= 5) && (gameOver ==false)){
        giveCard();
    }
}
function toExit(){
    window.close();
}
//AI编写
var AIModel = 1;
var AIName = ["一根筋","老油条","出千者"];
function AIThought (){
    if (AIModel == 3){
        return AIThought3();
    }else if (AIModel == 2){
        return AIThought2();
    }else{
        return AIThought1();
    }
}
//一根筋
function AIThought1(){
    if(yourPoint >= 9){
        AIDeside = false;
    }
    
}
//老油条
function AIThought2(){
    if ((IDeside == false)&&(yourPoint > myPoint)){
        AIDeside = false;
    }
    if (yourPoint >= 9){
        AIDeside = false;
    }
}
//出千者       思路：若是玩家满足某条件，情况危急则电脑出千，取得肮脏的胜利。
function AIThought3_(){
    if ((myPoint >= 9) && (!IDeside) && (yourPoint <= 10.5)){
        if((10.5 - yourPoint) == 0.5 ){
            var nu = cardsPoint.indexOf(0.5);
        }else if(((10.5 - yourPoint) - Math.floor(10.5 - yourPoint)) == 0.5){
            var nu = cardsPoint.indexOf(Math.floor(10.5 - yourPoint));
        }else{
            var nu = cardsPoint.indexOf(10.5 - yourPoint);
        }
        puts(nu);
        if(nu == -1){
            AIDeside = false;
            return false;
        }
        puts((nu));
        AIDeside = false;
        
        yourCards.push(cards[nu]);
        yourPoint += cardsPoint[nu];
        $("#yourTable img:eq("+times+")").attr("src","./pukeImage/back.jpg");
        puts("本张牌分数是"+cardsPoint[nu]+"，对方的点数和是"+yourPoint+"分。牌堆还剩下"+(cards.length-1)+"张牌。");
        cards.splice(nu,1);            //抽出牌
        cardsPoint.splice(nu,1);       //抽出牌对应的点数数组
        
    }
}
function AIThought3(){
    if ((IDeside == true)&&(yourPoint >= 9)){                   //规则1：我方还在要牌，电脑超过9点，电脑停止要牌
        AIDeside = false;
    }else if ((IDeside == false)&&(yourPoint > myPoint)){       //规则2：我方停止要牌，电脑一直要牌直到点数比我大
        AIDeside = false;
    }else if ((myPoint >= 8) && (!IDeside) && (yourPoint < 10.5) && AIDeside){ //规则3：我方点数超过8点且停止要牌，电脑还没死，电脑将出千，直接挑牌直到点数为10.5
        if((10.5 - yourPoint) == 0.5 ){
            var nu = cardsPoint.indexOf(0.5);
        }else if(((10.5 - yourPoint) - Math.floor(10.5 - yourPoint)) == 0.5){
            var nu = cardsPoint.indexOf(Math.floor(10.5 - yourPoint));
        }else{
            var nu = cardsPoint.indexOf(10.5 - yourPoint);
        }
        AIDeside = false;
        if(nu == -1){           //如果牌组中没找到电脑要挑的牌，电脑停止要牌，放弃抵抗
            AIDeside = false;
            return false;
        }
        
        yourCards.push(cards[nu]);
        yourPoint += cardsPoint[nu];
        $("#yourTable img:eq("+times+")").attr("src","./pukeImage/back.jpg");
        puts("本张牌分数是"+cardsPoint[nu]+"，对方的点数和是"+yourPoint+"分。牌堆还剩下"+(cards.length-1)+"张牌。");
        cards.splice(nu,1);            //抽出牌
        cardsPoint.splice(nu,1);       //抽出牌对应的点数数组
        if((yourPoint == 10) && (myPoint == 10) && (!IDeside) && (yourCards.length < 5)){
            var nu = cardsPoint.indexOf(0.5,3);
            yourCards.push(cards[nu]);
            yourPoint += cardsPoint[nu];
            $("#yourTable img:eq("+times+")").attr("src","./pukeImage/back.jpg");
            puts("本张牌分数是"+cardsPoint[nu]+"，对方的点数和是"+yourPoint+"分。牌堆还剩下"+(cards.length-1)+"张牌。");
            cards.splice(nu,1);            //抽出牌
            cardsPoint.splice(nu,1);       //抽出牌对应的点数数组
        }puts("对方出千了！！");
    }
}