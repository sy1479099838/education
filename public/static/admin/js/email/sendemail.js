function sendEmail()
{
    var emailNum=$("#EmailN").val();
    var user=$("#users").val();
    var stadio = $('input[name="Enclosure"]:checked').val();
    var myreg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var text=getHtml();
    var formData = new FormData();
    formData.append('file', $('#EnclosureFileCsv')[0].files[0]);
    if (!myreg.test(emailNum)) {
        alert("请输入正确的手机号码！");
    }
    else if(text=="" || text==null)
    {
        alert("请输入邮件内容！");
    }
    else if(stadio=="1") {
        $.ajax({
            url:"upfile",
            type:"post",
            data:formData,
            contentType: false, //必须
            processData: false, //必须
            success:function (msg) {
                // console.log(msg);
                msg=JSON.parse(msg);
                if(msg.a=="success")
                {
                    var form = $("#sendOne").serializeArray();
                    var texts=getHtml();
                    form=JSON.stringify(form);
                    $.ajax({
                        url:"send",
                        type:"post",
                        data:({
                            data:form,
                            file:msg.filename,
                            fileN:msg.file,
                            text:texts
                        }),
                        success:function (msg) {
                            if(msg=="success")
                            {
                                $(".sendState").html("<span style='color: green'>短信发送成功！</span>");
                            }
                            else if(msg=="error")
                            {
                                $(".sendState").html("<span style='color: red'>短信发送失败，请稍后再试！</span>");
                            }
                            else
                            {
                                $(".sendState").html("<span style='color: red'>"+msg+"</span>");
                            }
                        },
                        error:function (msg) {
                            $(".sendState").html("<span style='color: red'>短信发送失败，请稍后再试！</span>");
                        }
                    })
                }
            }
        });

    }
    else if(stadio==0)
    {
        var form = $("#sendOne").serializeArray();
        var texts=getHtml();
        form=JSON.stringify(form);
        $.ajax({
            url:"send",
            type:"post",
            data:({
                data:form,
                file:"",
                fileN:"",
                text:texts
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $(".sendState").html("<span style='color: green'>短信发送成功！</span>");
                }
                else if(msg=="error")
                {
                    $(".sendState").html("<span style='color: red'>短信发送失败，请稍后再试！</span>");
                }
                else
                {
                    $(".sendState").html("<span style='color: red'>"+msg+"</span>");
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
        $(".email-sendTwo").fadeOut(0);
        $(".email-sendOne").fadeIn(200);
        $(".email-method>button:nth-child(2)").css({"border":"1px solid #18a689", "background":"none","color": "#000000"});
        $(".email-method>button:nth-child(1)").css({"border":"1px solid #bdbdbd", "background":"#18a689","color": "#ffffff"});
    }
    else
    {
        $(".email-sendOne").fadeOut(0);
        $(".email-sendTwo").fadeIn(200);
        $(".email-method>button:nth-child(1)").css({"border":"1px solid #18a689", "background":"none","color": "#000000"});
        $(".email-method>button:nth-child(2)").css({"border":"1px solid #bdbdbd", "background":"#18a689","color": "#ffffff"});
    }
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

//获取百度富文本内容
function getHtml() {
    var editor = new UE.ui.Editor();
    var text=UE.getEditor('container').getContent();
    return text;
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

    $(".sendEmail").click(function () {
        var text=getHtml();
        $.ajax({
            url:'send',
            type:'post',
            success:function (msg) {
                // alert(123);
            },
            error:function (msg) {
                alert("失败！");
            }
        });
    });

    $('input[name="Enclosure"]').click(function () {
        var val=$(this).val();
        if(val=='1')
        {
            $(".Enclosure").fadeIn(0);
        }
        else
        {
            $(".Enclosure").fadeOut(0);
        }
    });
    $(".choiceEnclosure").click(function () {
        OpenMoreFile("EnclosureFileCsv");
    });
    $("#EnclosureFileCsv").change(function () {
        getCsvPath("EnclosureFileCsv","Enclosure");
    });
    $(document).ready(function(){
        var editor = UE.getEditor('container');
    });

});