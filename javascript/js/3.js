function renminbi(a){
    var b=$("#a").val();
    switch(b){
        case 'dor':
        return a*6.33
        break;
        case 'jap':
        return a*0.06
        break;
        case 'eur':
        return a*7.77
        break;
        case 'rus':
        return a*0.11
        break;
        case 'fra':
        return a*6.63
        break;
    }
}
$(document).ready(function(){
    $("#ca").click(function(){
        var a=$("#no").val();
        $("#result").html($("#no").val()+$("#a").find("option:selected").text()+"="+renminbi(a)+"人民币");
    });
});