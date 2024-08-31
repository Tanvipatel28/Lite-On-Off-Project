let btn = document.getElementById('togglebtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)
function toggleBulb (e){
           if(btn.textContent.includes('on')){
             bulb.src = "./imgs/lite on img.jpg"
             btn.textContent = "Turn off"
           }else{
            bulb.src = "./imgs/lite off img.jpg"
             btn.textContent = "Turn on"

           }
    
}