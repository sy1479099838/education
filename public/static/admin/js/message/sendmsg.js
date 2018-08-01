function sendMsg()
{
    var phoneNum=$("#PhoneN").val();
    var user=$("#user").val();
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phoneNum)) {
        alert("请输入正确的手机号码！");
    } else {
        $.ajax({
            url:"send",
            type:"post",
            data:{
                num:phoneNum,
                user:user
            },
            success:function (msg) {
                if(msg=="success")
                {
                    $(".sendState").html("<span style='color: green'>短信发送成功！</span>");
                }
                else
                {
                    $(".sendState").html("<span style='color: red'>短信发送失败，请稍后再试！</span>");
                }
            },
            error:function (msg) {
                $(".sendState").html("<span style='color: red'>短信发送失败，请稍后再试！</span>");
            }
        })
    }
}

function Choice(num) {
    if(num==1)
    {
        $(".message-sendTwo").fadeOut(0);
        $(".message-sendOne").fadeIn(200);
        $(".message-method>button:nth-child(2)").css({"border":"1px solid #18a689", "background":"none","color": "#000000"});
        $(".message-method>button:nth-child(1)").css({"border":"1px solid #bdbdbd", "background":"#18a689","color": "#ffffff"});
    }
    else
    {
        $(".message-sendOne").fadeOut(0);
        $(".message-sendTwo").fadeIn(200);
        $(".message-method>button:nth-child(1)").css({"border":"1px solid #18a689", "background":"none","color": "#000000"});
        $(".message-method>button:nth-child(2)").css({"border":"1px solid #bdbdbd", "background":"#18a689","color": "#ffffff"});
    }
}

function OpenMoreFile()
{
    document.getElementById("fileCsv").click();
    $(".UpButton").fadeOut(50);
}
function getCsvPath(){
    var f = document.getElementById("fileCsv").files;
    var file=f[0].name;
    $("#csvFile").val(file);
    $(".UpButton").fadeIn(100);
}
/*上传文件*/
function fileUpload(){
    var fileName = $('#fileCsv').val();　　　　　　　　　　　　　　　　　　//获得文件名称
    var fileType = fileName.substr(fileName.length-4,fileName.length);　　//截取文件类型,如(.xls)
    var formData = new FormData();
    formData.append('file', $('#fileCsv')[0].files[0]);
    if(fileType=='.csv'){　　　　　//验证文件类型,此处验证也可使用正则
        $.ajax({
            url: 'upcsvfile',
            type: 'POST',
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            success:function(data){
                $(".tableBox").fadeIn(200);
                $(".closeTableBox").fadeIn(200);
                $(".tableBox-content").html(data);
            },
            error:function (msg) {
                
            }
        });
    }else{
        alert('*上传文件类型错误,仅支持.csv文件！');
    }
}

function SendMsg(msg) {
    var text = $("input:checkbox[name='PhoneCheck']:checked").map(function(index,elem) {
        return $(elem).val();
    }).get().join(',');
    if(text=="" || text==null)
    {
        alert("请选择需要发送的手机号码！");
    }
    else
    {
        $.ajax({
            url:'moreup',
            type:'post',
            data:{
                text:text,
                path:msg
            },
            success:function (data) {
                if(data=="success")
                {
                    alert("短信发送成功！");
                    $(".tableBox").fadeOut(200);
                    $(".closeTableBox").fadeOut(200);
                }
                else
                {
                    alert("短信发送失败，请稍后再试！");
                    $(".tableBox").fadeOut(200);
                    $(".closeTableBox").fadeOut(200);
                }
            },
            error:function (data) {
                alert("短信发送失败，请重试！");
                $(".tableBox").fadeOut(200);
                $(".closeTableBox").fadeOut(200);
            }
        });
    }
}

function closeTableBox() {
    $(".tableBox").fadeOut(200);
    $(".closeTableBox").fadeOut(200);
}



function openTable(num) {
    var div=$(".table"+num);
    var button=$("#clickButton"+num);
    var state=div.css("display");
    if(state!="none")
    {
        div.fadeOut(0);
        button.removeClass("fa-caret-down");
        button.addClass("fa-caret-right");

    }
    else
    {
        div.fadeIn(0);
        button.removeClass("fa-caret-right");
        button.addClass("fa-caret-down");
    }

}


function AllCheck() {
   var state=document.getElementById("AllCheck").checked;
   if(state==true)
   {
       $("input:checkbox[name='PhoneCheck']").prop("checked",true);
       $("input:checkbox[name='XuanCheck']").prop("checked",true);
   }
   else
   {
       $("input:checkbox[name='PhoneCheck']").prop("checked",false);
       $("input:checkbox[name='XuanCheck']").prop("checked",false);
   }
}

function XuanCheck(num) {
    var state=document.getElementById("XuanCheck"+num).checked;
    if(state==true)
    {
        $(".table"+num+">tr input").prop("checked",true);
        if($('input[name="PhoneCheck"]:checked').length==$('input[name="PhoneCheck"]').length)
        {
            $("input:checkbox[name='AllCheck']").prop("checked",true);
        }
        else
        {
            $("input:checkbox[name='AllCheck']").prop("checked",false);
        }
    }
    else
    {
        $(".table"+num+">tr input").prop("checked",false);
        $("input:checkbox[name='AllCheck']").prop("checked",false);
    }
}


function checkOne(num) {
   if($('.table'+num+' input[name="PhoneCheck"]:checked').length==$('.table'+num+' input[name="PhoneCheck"]').length)
   {
        $("#XuanCheck"+num).prop("checked",true);
   }
   else
   {
       $("#XuanCheck"+num).prop("checked",false);
   }

    if($('input[name="PhoneCheck"]:checked').length==$('input[name="PhoneCheck"]').length)
    {
        $("input:checkbox[name='AllCheck']").prop("checked",true);
    }
    else
    {
        $("input:checkbox[name='AllCheck']").prop("checked",false);
    }
}

$(function () {
    /*
    * 点击下载excel模板
    * */
    $(".down").click(function () {
        window.location.href="./../../static/admin/files/test.xlsx";
    });
    /*
    * 点击查看使用手册
    * */
    $(".Explain").click(function () {
        $.ajax({
            url:"explain",
            type:"post",
            success:function (msg) {
                if(msg!="error")
                {
                    $(".UseExplain-content").html(msg);
                    $(".UseExplain").fadeIn();
                    $(".CloseExplain").fadeIn();
                }
                else
                {
                    alert("使用说明查询出错，请重试！");
                }
            },
            error:function (data) {
                alert("出错啦，请重试！");
            }
            
        });
    });

    $(".CloseExplain").click(function () {
        $(".UseExplain-content").html("");
        $(".UseExplain").fadeOut();
        $(".CloseExplain").fadeOut();
    });
});