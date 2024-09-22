let user=document.querySelector(".user-content")
let btn=document.querySelector  ("#btn")
let input=document.querySelector("#inp")
let usermsg="null";
let chatcontainer=document.querySelector(".msg")
let aicontainer=document.querySelector(".ai-content")
function createChatBox(userwrite,className) {
let div=document.createElement("div")
div.classList.add(className)
div.innerHTML=userwrite;
return div;

}
function showload() {
  let ai=` <img class="img2"src="bot.gif" alt="">
     <div class="chatpara">
        <p>
</p>
     </div>`
     let aibox=createChatBox(userwrite,"ai-content");
     aicontainer.appendChild(aibox);
}
btn.addEventListener("click",()=>{
  usermsg=input.value;
  if(!usermsg) return ;
  let userwrite = `
      <img class="img1" src="picr.png" alt="">
      <div class="userpara">
        <p></p>
      
    </div>`;
    let userbox=createChatBox(userwrite,"user-content");
    

    userbox.querySelector(".userpara").innerText=usermsg;
    chatcontainer.appendChild(userbox);
    input.value="";
  
  setTimeout(showload,500);
})