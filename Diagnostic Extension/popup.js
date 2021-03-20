$(function(){
    function repeatingFunction(){
        chrome.system.cpu.getInfo(CpuInfo =>{
            console.log(CpuInfo);
        });
        chrome.system.display.getInfo(Display =>{
            console.log(Display);
        });
        chrome.system.storage.getInfo(Storage =>{
            console.log(Storage);
        });
        chrome.system.memory.getInfo(Memory =>{
            console.log(Memory);
        });
    
    console.clear();
}
 

repeatingFunction();
setInterval(function(){
    repeatingFunction()
},3000);
    
    

});