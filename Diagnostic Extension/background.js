chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
       if(request.toFind == "cpuInfo")
        {chrome.system.cpu.getInfo(CpuInfo =>{
            sendResponse(CpuInfo);
        });}
        else if(request.toFind == "Memory"){
            chrome.system.memory.getInfo(Memory =>{
                sendResponse(Memory);
            });
        }
        else if(request.toFind == "Storage"){
            chrome.system.storage.getInfo(Storage =>{
                sendResponse(Storage);
            });
        }
        else{
            chrome.system.display.getInfo(Display =>{
                sendResponse(Display);
            });
        }
  });
