function Nextstep(num) {
    if(num==2)
    {
        var radio=$('input[name="staticRadio"]:checked').val();
        var text = $("input:checkbox[name='staticCheck']:checked").map(function(index,elem) {
            return $(elem).val();
        }).get().join(',');
        // alert(radio);
        if(radio=="undefined" || radio==null || radio=="")
        {
            alert("请选择应用类型！");
        }
        else if(text=="" || text==null || text=="undefined")
        {
            alert("请选择标准功能！");
        }
        else{
            $.ajax({
                url:"choiceapp",
                type:"post",
                success:function (msg) {
                    $(".static-appUpload").html(msg);
                },
                error:function () {
                    alert("出错啦，请重试！");
                }

            });
            $(".static-top-step>span:nth-child(1)").css({"border":"1px solid #bdbdbd","background":"none","color":"#bdbdbd"});
            $(".static-top-step>span:nth-child(2)").css({"border":"1px solid #18a689","background":"#18a689","color":"#ffffff"});
            $(".static-choice").fadeOut(0);
            $(".static-appUpload").fadeIn(50);
        }
    }
    else if(num==3)
    {
        var filename=$("#fileName").val();
        if(filename=="" || filename=="undefined" || filename==null)
        {
            alert("请选择上传的app！");
        }
        else
        {
            $(".static-top-step>span:nth-child(2)").css({"border":"1px solid #bdbdbd","background":"none","color":"#bdbdbd"});
            $(".static-top-step>span:nth-child(3)").css({"border":"1px solid #18a689","background":"#18a689","color":"#ffffff"});
            $(".static-appUpload").fadeOut(0);
            $(".static-result").fadeIn(50);
        }
    }

}

function selectFile(){
    $("#file").trigger("click");
}

function previousStep(num)
{
    if(num==1)
    {
        $(".static-appUpload").html('');
        $(".static-top-step>span:nth-child(2)").css({"border":"1px solid #bdbdbd","background":"none","color":"#bdbdbd"});
        $(".static-top-step>span:nth-child(1)").css({"border":"1px solid #18a689","background":"#18a689","color":"#ffffff"});
        $(".static-appUpload").fadeOut(0);
        $(".static-choice").fadeIn(50);
    }
    else if(num==2)
    {
        $.ajax({
            url:"choiceapp",
            type:"post",
            success:function (msg) {
                $(".static-appUpload").html(msg);
            },
            error:function () {
                alert("出错啦，请重试！");
            }

        });
        $(".static-top-step>span:nth-child(3)").css({"border":"1px solid #bdbdbd","background":"none","color":"#bdbdbd"});
        $(".static-top-step>span:nth-child(2)").css({"border":"1px solid #18a689","background":"#18a689","color":"#ffffff"});
        $(".static-choice").fadeOut(0);
        $(".static-appUpload").fadeIn(50);
    }
}

function getFilePath(){
    var f = document.getElementById("file").files;
    var file=f[0].name;
    $("#fileName").val(file);
}