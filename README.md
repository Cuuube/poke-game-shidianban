<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
		<title>十点半</title>
        <link type="text/css" rel="stylesheet" href="css.css"/>
		<script src="jquery-3.1.1.min.js"></script>
		<script src="util.js"></script>
        <script src="js.js"></script>
        
	</head>
	
	<body>
        <div id="mainPage">
            <div id="loadingD">
                <h1>LOADING......</h1>
                <div id="loading"><div></div></div>
                <h2>点击开始</h2>
            </div>
            <div id="shadowD"><img src="./pukeImage/shadow1.png"/></div>
            <script> $("#loading div").css("width","30%");</script>
            <div id="myTable">
                <div class="cardD" id="myCard1"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="myCard2"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="myCard3"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="myCard4"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="myCard5"><img src="./pukeImage/blank.png"/></div>
                <div class="clearD"></div>
            </div>
            <script> $("#loading div").css("width","55%");</script>
            <div id="yourTable">
                <div class="cardD" id="yourCard1"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="yourCard2"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="yourCard3"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="yourCard4"><img src="./pukeImage/blank.png"/></div>
                <div class="cardD" id="yourCard5"><img src="./pukeImage/blank.png"/></div>
                <div class="clearD"></div>
            </div>
            <script> $("#loading div").css("width","80%");</script>
            <div id="discard_pile_bottom"><img src="./pukeImage/blank.png"/></div>
            <div id="discard_pile"></div>
            <img id="animaCard" alt="" src="./pukeImage/back.png"/>
            <div id="opponentD">
                <div>
                    <h3>请选择您的对手:</h3>
                    <span>一根筋</span>
                    <span>老油条</span>
                    <span>出千者</span>
                    <img id="opp1" src="./pukeImage/1p.png"/>
                    <img id="opp2" src="./pukeImage/2p.png"/>
                    <img id="opp3" src="./pukeImage/3p.png"/>
                    <span id="info"></span>
                    
                </div>
            </div>
            <div id="opp3D"><img src="./pukeImage/p3BG.png"/></div>
            <div id="ruleD">
                <div>
                    <h3>规则说明:</h3>
                    <p>①点数计算：从A(1)~10的牌点数均为其自身数字。A为1点。</p>
                    <p>其中J、Q、K和大小王均为半点。玩家点数为手中所有牌点数相加。</p>
                    <p>②游戏流程：双方轮流选择要牌。玩家可选择要牌或者不要牌。要牌从牌堆中摸一张牌。不要牌则玩家不可再选择要牌，只能等对方执行直到游戏结束。</p>
                    <p>③结果判断：玩家要以尽量使点数和不大于十点半为前提，使自己点数较大。</p>
                    <p>若游戏一方摸牌之后手中牌点数超过十点半则立即判负。另一方点数不大于十点半的判赢。若是摸牌后点数刚好等于十点半，则立即判赢</p>
                    <p>每人手中牌上限为五张。点数不大于十点半并且手中牌达到五张则不能再进行摸牌。双方均达到五张则进行判断，点数接近十点半的判赢。</p>
                    <p>若游戏一方手牌不足五张并且放弃要牌，另一方要足五张且始终点数小于十点半，则不进行点数比较，五张牌的玩家获胜。</p>
                    <p>点击筹码隐藏</p>
                </div>
            </div>
            <div id="howToPlayD"><img src="./pukeImage/howToPlay.png"/></div>
            <input type="button" id="opponentB"/>
            <input type="button" id="endB"/>
            <input type="button" id="ruleB"/>
            <input type="button" id="wayToPlayB"/>
            <input type="button" id="endW"/>
            <div id="resultD"><h1></h1></div>
            
        </div>
        <script> $("#loading div").css("width","100%");$("#loadingD h1").append("FINISHED");</script>
	</body>

</html>
