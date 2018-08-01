function OpenMoreFile(id)
{
    document.getElementById(id).click();
}

function getCsvPath(id,inputs,buttons){
    var f = document.getElementById(id).files;
    var file=f[0].name;
    $("#"+inputs).val(file);
    $("."+buttons).fadeIn(100);
}