// function $(str) {
    // var newstr = str.slice(1);
    // switch(str.charAt(0)){
        // case "#":
            // return document.getElementById(newstr);
            // break;
        // case ".":                                           //有错误
            // var allNodes = document.getElementsByTagName("*");
            // var hasAttr;
            // for (var i = 0;i<allNodes.length;i++){
                // for (var j in allNodes[i].style){
                    // if (j === newstr) {
                        // hasAttr = allNodes[i];
                        // break;
                    // }
                // }
                
                
            // }
            // return hasAttr;
            // break;
        // case "[":
            // var attr = str.substring(1,(str.length-1));
            // var allNodes = document.getElementsByTagName("*");
            // var hasAttr;
            // for (var i = 0;i<allNodes.length;i++){
                // if (allNodes[i].hasAttribute(attr)) {
                    // hasAttr = allNodes[i];
                    // break;
                // }
            // }
            
            // return hasAttr;
        // default:
            // break;
    // }
    
// }
// function $(id) {
    // return document.getElementById(id);
// }
function puts(str1,str2) {
    if(!str2){
        console.log(str1);
    }else{
         document.getElementById(str2).innerHTML = str1;
    }
}
function add(num1, num2) {
    return num1 + num2;
}

function isArray(arr){                  //判断是否数组
    if(arr instanceof Array){
        return true;
    }else{
        return false;
    }
}
function isArray2(obj) {                //判断是否数组
    return Object.prototype.toString.call(obj) === '[object Array]';    
}  
function isFunction(func){              //判断是否函数
    if(func instanceof Function){
        return true;
    }else{
        return false;
    }
}
function isFunction2(func){             //判断是否函数
    if(typeof(func)=="function"){
        return true;
    }else{
        return false;
    }
}

// function a(){};
// var b = 5;
// console.log(isFunction2(a));
// console.log(isFunction2(b));
function cloneObject(obj) {              //完全复制类
    var re = {};
    for (var key in obj){
        re[key] = typeof obj[key]==='object'?cloneObject(obj[key]):obj[key];
    }
    return re;
}
function cloneArray(arr) {              //完全复制类
    var re = [];
    for (var key in arr){
        re.push(arr[key]);
    }
    return re;
}
function uniqArray(arr) {                 //数组去重（IE8以下不支持）
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] == ""){continue;}        //去掉空（""）元素
        if(newarr.indexOf(arr[i]) ==-1){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
// var arr1 = [1,5,7,8,9,9,9,6];
// console.log(uniqArray(arr1));

function simpleLeftTrim(str) {             //切除左边空格
    var newstr;
    for (var i=0;i<str.length;i++){
        if(str.charAt(i)==" "||str.charAt(i)=="  "){
            newstr = str.slice(i+1);
        }else{break;}
    }
    return newstr;
}
function simpleRightTrim(str) {             //切除右边空格
    var newstr;
    var num;
    for (var i=str.length-1;i>0;i--){
        if(str.charAt(i)==" "||str.charAt(i)=="  "){
            num = i;
        }else{break;}
    }
    newstr = str.slice(0,num);
    return newstr;
}
function simpleTrim(str) {                   //改装成两头切.
    return simpleLeftTrim(simpleRightTrim(str));
}

function trim(str){                          //用正则表达式切两头
    var pattern = /\S+\S/g;
    return str.match(pattern).toString();
}
// var str1 = "            sasda5646     ";
// console.log(trim(str1));
// console.log("sadsa");

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i=0;i<arr.length;i++){
        fn(arr[i],i);
    }
}
// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
    // console.log(index + ': ' + item)
// }
// each(arr, output);  // 0:java, 1:c, 2:php, 3:html


// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var num = 0;
    for (var key in obj){
        num+=1;
    }
    return num;
}

// 使用示例
// var obj = {
    // a: 1,
    // b: 2,
    // c: {
        // c1: 3,
        // c2: 4
    // }
// };
// console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var pattern = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9_\.\-])+$/g);
    return pattern.test(emailStr);
}


// 判断是否为手机号
function isMobilePhone(phone) {
    var pattern = new RegExp(/^1[3-9]\d{9}$/g);
    return pattern.test(phone);
}
// var m = 13544746547;
// var n = "asdkljl@sadkl.fd.sdfd"
// console.log(isMobilePhone(m));
// console.log(isEmail(n));

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.setAttribute("class",newClassName);
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.removeAttribute("class",oldClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    if (element.parentNode === siblingNode.parentNode){
        return true;
    }else{
        return false;
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var x = 0,y = 0;
    while(element.offsetParent){
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return {x,y};
}

//常用的几种排序法
//1.冒泡排序法
function bubbleSort(arr,num) {       //第二个参数 true：从小到大排  false：从大到小排。
    if(num || num == undefined){
        for (var x = 0;x < arr.length - 1 ;x++) {      //x倒着滚，y倒着滚，一路把小的往前翻
            for (var y = arr.length - 1;y > x - 1;y--){
                if(arr[y] < arr[y-1]){
                    var temp = arr[y-1];
                    arr[y-1] = arr[y];
                    arr[y] = temp;
                }
            }
        }
        return arr;
    }else{
        for (var x = 0;x < arr.length - 1;x++) {    //x正着滚，y倒着滚，一路把大的往前翻
            for (var y = arr.length - 1;y > x - 1 ;y--){
                if(arr[y] > arr[y-1]){
                    var temp = arr[y-1];
                    arr[y-1] = arr[y];
                    arr[y] = temp;
                }
            }
        }
        return arr;
    }
}

//2.选择排序法
function selectionSort(arr,num) {       //第二个参数 true：从小到大排  false：从大到小排。
    if(num || num == undefined){
        for (var x = 0;x < arr.length - 1;x++){     //小的丢到最前
            for (var y = x;y < arr.length;y++){
                if(arr[y] < arr[x]){        //变成从大到小这个地方改个符号就可以了（下面是另一种循环）
                    var temp = arr[x];
                    arr[x] = arr[y];
                    arr[y] = temp;
                }
            }
        }
        return arr;
    }else{
        for (var x = arr.length - 1;x > 0;x--){     //另一种循环（小的丢到最后）
            for (var y = x ;y >= 0;y--){
                if(arr[y] < arr[x]){
                    var temp = arr[x];
                    arr[x] = arr[y];
                    arr[y] = temp;
                }
            }
        }
        return arr;
    }
}

//3.插入排序法（暂时失败）
function insertSort(arr) {
    var arr_ = [arr[0]];
    for (var x = 1;x < arr.length;x++){
        for (var y = 0;y < x + 1;y++){
            if(arr[x] < arr_[y]){
                arr_.splice(y,0,arr[x]);
                break;
            }else{
                arr_.push(arr[x]);
            }
        }
    }
    return arr_;
}


//给定条件剔除或保留数组，func（）确定留或不留。
function recon(arr,func) {
	var arr_;
	for (var i = 0;i < arr.length;i++) {
		if (func(arr[i])) {
			arr_.push(arr[i]);
		}
	}
	return arr_;
}

//查找某项在没在某数组里出现过。出现过返回序号。没出现过返回-1
function searchArr(arr,str){
    for (var i=0;i<arr.length;i++){
        if (arr[i] == str){
            return i;
        }else{
            return -1;
        }
    }
}
///////////////////////////
// function $(str) {
    // var newstr = str.slice(1);
    // switch(str.charAt(0)){
        // case "#":
            // return document.getElementById(newstr);
            // break;
        // case ".":                                           //有错误
            // var allNodes = document.getElementsByTagName("*");
            // var hasAttr;
            // for (var i = 0;i<allNodes.length;i++){
                // for (var j in allNodes[i].style){
                    // if (j === newstr) {
                        // hasAttr = allNodes[i];
                        // break;
                    // }
                // }
                
                
            // }
            // return hasAttr;
            // break;
        // case "[":
            // var attr = str.substring(1,(str.length-1));
            // var allNodes = document.getElementsByTagName("*");
            // var hasAttr;
            // for (var i = 0;i<allNodes.length;i++){
                // if (allNodes[i].hasAttribute(attr)) {
                    // hasAttr = allNodes[i];
                    // break;
                // }
            // }
            
            // return hasAttr;
        // default:
            // break;
    // }
    
// }

