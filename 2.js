const renminbi=(type,num)=>{
    let rmb
    if(b=="dor"){
        rmb=6.33*num;
    }else if(b=="jap"){
        rmb=0.06*num;
    }else if(b=="eur"){
        rmb=7.77*num;
    }else if(b=="rus"){
        rmb=0.11*num;
    }else if(b=="fra"){
        rmb=6.63*num;
    }
    return rmb;
}
// $(document).ready(function(){
//     $("#ca").click(function(){
//         var a=$("#no").val();
//         $("#result").html($("#no").val()+$("#a").find("option:selected").text()+"="+renminbi(a)+"人民币");
//     });
// });