let productImg = document.getElementById("product-img")
let button = document.getElementsByClassName("btn")

button[0].onclick = function() {
    productImg.src= "images/image3.png"
    
}
button[1].onclick = function() {
    productImg.src= "images/image2.png";
    for(bt of button){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
button[2].onclick = function() {
    productImg.src= "images/image1.png";
    for(bt of button){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
