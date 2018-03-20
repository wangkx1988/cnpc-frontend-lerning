const renminbi=(type,num)=>{
    let rmb;
    switch(type){
        case 'dor':
        return num*6.33
        break;
        case 'jap':
        return num*0.06
        break;
        case 'eur':
        return num*7.77
        break;
        case 'rus':
        return num*0.11
        break;
        case 'fra':
        return num*6.63
        break;
    return rmb;
}
    
// $(document).ready(function(){
//     $("#ca").click(function(){
//         var a=$("#no").val();
//         $("#result").html($("#no").val()+$("#a").find("option:selected").text()+"="+renminbi(a)+"人民币");
//     });
// });