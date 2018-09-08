/**
 * Created by Administrator on 2015/12/1.
 */
var xmlHttpObj;  //全局变量

//捕获事件函数
function catchEvent (eventObj,event,eventHandler) {
	if (eventObj.addEventListener) { //W3C浏览器
		eventObj.addEventListener(event,eventHandler,false);
	}
	else if (eventObj.attachEvent) { //低版本IE浏览器
		event = "on" + event;
		eventObj.attachEvent(event,eventHandler);
	}
}

//创建XHR对象
function getXmlHttp () {
	var xmlhttp = null;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
		if (xmlhttp.overrideMimeType) {
			xmlhttp.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}

//准备并发送XHR请求
function populateList() {
	var state = document.getElementById("stateList").value;
	var url = 'ch15-12.php?state=' + state;

	//如果不支持xmlHttpObj
	if (!xmlHttpObj) {
		xmlHttpObj = getXmlHttp();
	}
	if (!xmlHttpObj) {
		return;
	}
	xmlHttpObj.open('GET',url,true);
	xmlHttpObj.onreadystatechange = getCities;
	xmlHttpObj.send(null);
}

//处理返回的数据
function getCities() {
	if (xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200) {
		document.getElementById("cities").innerHTML = xmlHttpObj.responseText;
	}
	else if (xmlHttpObj.readyState == 4 && xmlHttpObj.status != 200) {
		document.getElementById("cities").innerHTML = 'Error:preSearch Failed!';
	}
}
