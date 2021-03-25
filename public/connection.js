var editorExtensionId = "nfmajjgjfffegnplelahdemjendkgmpb";
function repeatingFunction() {
  chrome.runtime.sendMessage(
    editorExtensionId,
    { toFind: "cpuInfo" },
    function (cpuInfo) {
      document.getElementById("archname").textContent = cpuInfo.archName;
      var features = cpuInfo.features;
      var s = "";
      console.log(cpuInfo.processors[0]);
      function match() {
        for (let index = 0; index < features.length; index++) {
          s = s + features[index] + " ";
        }
        return s;
      }
      document.getElementById("features").textContent = match();

      document.getElementById("modelName").textContent = cpuInfo.modelName;
      document.getElementById("numOfProcessor").textContent =
        cpuInfo.numOfProcessors;
    }
  );
  chrome.runtime.sendMessage(
    editorExtensionId,
    { toFind: "Memory" },
    function (Memory) {
      document.getElementById("availableCapacity").textContent =
        Memory.availableCapacity / (1024 * 1024 * 8) + " GB";
      document.getElementById("capacity").textContent =
        Memory.capacity / (1024 * 1024 * 8) + " GB";
    }
  );
  chrome.runtime.sendMessage(
    editorExtensionId,
    { toFind: "Storage" },
    function (Storage) {
      document.getElementById("capacity1").textContent =
        Storage[0].capacity / (1024 * 1024 * 1024).toFixed(2) + " GB";
      document.getElementById("capacity2").textContent =
        Storage[1].capacity / (1024 * 1024 * 1024).toFixed(2) + " GB";
      document.getElementById("capacity3").textContent =
        Storage[2].capacity / (1024 * 1024 * 1024).toFixed(2) + " GB";
      document.getElementById("capacity4").textContent =
        Storage[3].capacity / (1024 * 1024 * 1024).toFixed(2) + " GB";
    }
  );
  chrome.runtime.sendMessage(
    editorExtensionId,
    { toFind: "Display" },
    function (Display) {
      document.getElementById("height").textContent =
        Display[0].bounds.height + " pixels";
      document.getElementById("width").textContent =
        Display[0].bounds.width + " pixels";
    }
  );
}

repeatingFunction();
setInterval(function () {
  repeatingFunction();
}, 30000);
