var data =JSON.parse(localStorage.getItem("products")) || [];
console.log(data);

data.map(function(elem,index){

var box =document.createElement("div");    

var imageurl = document.createElement("img");
imageurl.src =elem.image;

var type =document.createElement("p");
type.textContent= elem.type;

var desc = document.createElement("p")
desc.textContent=elem.desc;

var price =document.createElement("p")
price.textContent=elem.price;

var btn=document.createElement("button");
    btn.setAttribute="remove_product";
    btn.innerText="Remove";
    btn.addEventListener("click",function (){
      removeitems(elem,index);
    });

box.append(imageurl,type,desc,price,btn)
document.querySelector("#all_products").append(box);

});
function removeitems(elem,index){
    console.log(elem,index);
    data.splice(index,1);
    console.log(data);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}