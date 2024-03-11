function bgchange(color){
    let colorArray=["#e58e26","#f9b4ab","#00FF00","#78e08f","#fd79a8"]
    document.body.style.background=colorArray[color];

}

let colorArray=["#e58e26","#f9b4ab","#00FF00","#78e08f","#fd79a8"]
let colorbox=document.getElementById("colorbox");

colorArray.forEach(function(color,index){
    let span=document.createElement("span")
    span.style.backgroundColor=color
    span.addEventListener("click",function(){
        bgchange(index);
    })
    colorbox.appendChild(span);
})