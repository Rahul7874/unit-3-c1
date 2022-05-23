//store the products array in localstorage as "products"
document.getElementById("products").addEventListener("submit",submitFunction);
var data = JSON.parse(localStorage.getItem("products")) || [];

function productData(T,D,P,I){
    this.type=T;
    this.desc=D;
    this.image=I;
    this.price=P;
};



 function submitFunction(){
event.preventDefault();
var type =document.querySelector("#type").value
var desc=document.querySelector("#desc").value
var price =document.querySelector("#price").value
var image =document.querySelector("#image").value
let dataObj =new productData(type,desc,price,image)
data.push(dataObj)
localStorage.setItem("products",JSON.stringify(data));
alert("data added succesfully...")
type.value="";
desc.value="";
price.value="";
image.value="";


 }