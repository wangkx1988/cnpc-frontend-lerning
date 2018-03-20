function renminbi(a){
    var b=$("#a").val();
    if(b=="dor"){
        return a*6.33
    }else if(b=="jap"){
        return a*0.06
    }else if(b=="eur"){
        return a*7.77
    }else if(b=="rus"){
        return a*0.11
    }else if(b=="fra"){
        return a*6.63
    }
}
$(document).ready(function(){
    $("#ca").click(function(){
        var a=$("#no").val();
        $("#result").html($("#no").val()+$("#a").find("option:selected").text()+"="+renminbi(a)+"人民币");
    });
});