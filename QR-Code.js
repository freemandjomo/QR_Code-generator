let wrapper = document.querySelector(".wrapper");
   let input = document.getElementById("input");
   let button = document.getElementById("CodeBtn");
   let qrImg = document.getElementById("qrImg");
    
   let qrvalue = input.value ;

   button.onclick = function () {
    let qrvalue = input.value ;
    if(!qrvalue) return ;
    button.innerText = "Generating QR Code...";
    //console.log(qrvalue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${qrvalue}`;
    qrImg.onload = function () {
     wrapper.classList.add("active");
     button.innerText = "Generate QR Code";
     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${qrvalue}`;

     }
   }
   input.onkeyup = function () {
    if(!input.value) {
        wrapper.classList.remove("active");
    }
   }