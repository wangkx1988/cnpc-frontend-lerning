var myAnswer=new Array("D","C","D","C","B","B","C","B","C","D","B","A");
function check(a){
    return myAnswer[a-1];
}
$(document).ready(function(){
    var b=$("#a").find("option:selected").val();
    var c=check(parseInt(b));
    $("#result").html(c);
    $("#a").change(function(){
        var b=$("#a").find("option:selected").val();
        var c=check(parseInt(b));
        $("#result").html(c);
    });
});