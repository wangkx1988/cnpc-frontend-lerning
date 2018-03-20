// function dollor(a){
//     return a*6.33;
// }
// function yuan(a){
//     return a*0.158;
// }
// $(document).ready(function(){
//     $("#a1").html("人民币");
//     $("#a2").html("美元");
//     $("#tran").click(function(){
//         var b1=$("#a1").html();
//         var b2=$("#a2").html();
//         $("#a1").html(b2);
//         $("#a2").html(b1);
//     });
//     $("#ca").click(function(){
//         var a=$("#no").val();
//         var c=$("#a1").html();
//         if(c=="人民币"){
//             $("#result").html(a+"人民币="+yuan(a)+"美元")
//         }else if(c=="美元"){
//             $("#result").html(a+"美元="+dollor(a)+"人民币")
//         }
//     });
// });
const dollertormb=(dollor)=>{
    const rmb=dollor*6.33;
    return rmb;
}

const rmbtodollor=(rmb)=>{
    const dollor=rmb/6.33;
    return dollor;
}
console.log(dollertormb(1));
console.log(rmbtodollor(1));