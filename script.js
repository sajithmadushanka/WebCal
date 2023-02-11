let result=document.getElementById("iputtext");

let calculate=(num)=>{
    result.value+=num;

}
let Result=()=>{
    try {
        result.value=eval(result.value);
    }
    catch(err){
            alert("please enter valid input");
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}