const qrText = document.getElementById("qr-text")
const qrsize = document.getElementById("size")
const qrbody = document.getElementById("qr-body")

const genBtn = document.getElementById("genbtn")
const downloadBtn = document.getElementById("downbtn")

let size= qrsize.value;

genBtn.addEventListener("click",(e) => { 
    e.preventDefault();
    if(qrText.value.length>1){
        generateQrcode()
    }
    else{
        alert("Please enter the text")
    }
    
    
 })

qrsize.addEventListener("change",(e) => { 
    size = e.target.value;
    generateQrcode();
 })

function generateQrcode() {
    qrbody.innerHTML="";
    new QRCode(qrbody,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    })
}
