/**
 * Created by Administrator on 2015/10/10.
 */
function arrow(){
    var oArrowLeft = document.getElementsByClassName("solve-main-imgArrowLeft");
    var oArrowRight = document.getElementsByClassName("solve-main-imgArrowRight");
    var oDiv = document.getElementById("content-solve-main-qieHuan");//切换图片父级DIV
    var oUl = oDiv.getElementsByClassName("solve-main-ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    //var now = 5 * (aLi[0].offsetWidth + 18);
    oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;//将图片张数增加一倍
    oUl.style.width = aLi.length * (aLi[0].offsetWidth + 18) + 'px'; // 2010px
    console.log(oUl.offsetWidth);
    oArrowLeft[0].onclick = function () {
        if(oUl.offsetLeft <= -oUl.offsetWidth/2){
            oUl.style.left = "0";
        }
        var time = setInterval(function(){
          if(oUl.offsetLeft <= -oUl.offsetWidth/2){
              oUl.style.left = oUl.offsetLeft+35 +"px";
              clearInterval(time);
          }
          oUl.style.left = oUl.offsetLeft-20 +"px";
            console.log(oUl.offsetLeft);
        },1);
    };
    oArrowRight[0].onclick = function () {
        if(oUl.offsetLeft>=0){
            oUl.style.left = -oUl.offsetWidth/2+"px";
        }
        var time = setInterval(function () {
           if(oUl.offsetLeft>=0){
               oUl.style.left = oUl.offsetLeft-35+"px";
               clearInterval(time);
           }
           oUl.style.left = oUl.offsetLeft+20+"px";
            console.log(oUl.style.left);
        },1);
    };
}
arrow();

