var countdown=60; 
function settime(obj) { 
    if (countdown == 0) { 
        obj.removeAttribute("disabled");    
        obj.value="获取验证码"; 
		obj.style.background="#e74143"
        countdown = 60; 
        return;
    } else { 
        obj.setAttribute("disabled", true); 
        obj.value="已发送(" + countdown + "s)"; 
		obj.style.background="#b3b3b3"
        countdown--; 
    } 
setTimeout(function() { 
    settime(obj) }
    ,1000) 
}