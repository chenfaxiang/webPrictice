/**
 * Created by Administrator on 2015/12/7.
 */
$(function () {
	$("Button1").click (function () {
		var $content = $("#txtContent");
		if($content.val() != "") {
			SendContent($content.val());
		}
		else {
			alert("发送的内容不能为空!");
			$content.focus();
			return false;
		}
	});
	InitFace();
	$("table tr td img").click(function() {
		var strContent = $("#txtContent").val() + "<:" + this.id +":>";
		$("#txtContent").val(strContent);
	});

	AutoUpdContent();
	var hander = setInterval("AutoUpdContent()",5000);

	$("#divMsg").ajaxStart(function () {
		$(this).show().html("正在发送数据……");
	});
	$("#divMsg").ajaxStop(function () {
		$(this).show().html("数据发送结束……").hide();
	});

	function SendContent (content) {
		$.ajax({
			type:"GET",
			url: "index.php",
			data: "action=SendContent&d=" + new Date() + "&content=" + content,
			success: function (data) {
				if (data == "1") {
					GetMessageList();
					$("#txtContent").val("");
				}
				else {
					alert("发送失败");
					return false;
				}
			}
		})
	}

	function GetMessageList() { //自定义返回聊天内容
		$.ajax({
			type: "GET",
			url: "index.php",
			data: "action=ChatList&d=" + new Date(),
			success: function(data) {
				$("#divContent").html(data);
			}
		})
	}

	function GetOnLineList() { //自定义在线人员函数
		$.ajax({
			type: "GET",
			url: "index.php",
			data: "action=OnLineList&d=" + new Date(),
			success: function(data) {
				$("#divOnLine").html(data);
			}
		})
	}

	function InitFace() {
		var strHTML = "";
		for (var i = 1; i <= 10; i++) {
			strHTML += "<img src='Face/" + i + ".gif' id='" + i + "'/>";
		}
		$("#divFace").html(strHTML);
	}

	function AutoUpdContent() {
		GetMessageList();
		GetOnLineList();
	}
});