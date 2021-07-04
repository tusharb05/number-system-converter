import { ipcRenderer } from "electron";
import fs from "fs";
import path from "path";

let wClose = fs.readFileSync(
  path.join(__dirname, "..", "..", "icons", "close-w-20.png"),
  { encoding: "base64" }
);
let kClose = fs.readFileSync(
  path.join(__dirname, "..", "..", "icons", "close-k-20.png"),
  {
    encoding: "base64",
  }
);
document.addEventListener("DOMContentLoaded", function DOMLOADED() {
  try {
    subscribe();
  } catch (e) {}
  ipcRenderer.invoke("dom-ready");

  ipcRenderer.on("append-html-to-dom", (ev, element, type) => {
    const elem = document.createElement("div");

    elem.innerHTML = element;
    document.getElementById("root").append(elem);
    if (type && type == "button-subscriber") subscribe();
  });
  document.getElementById("in").onfocus = function () {
    document.getElementById("in").blur();
  };
  document.onkeydown = (e) => {
    if (!/^[A-Fa-f0-9]+$/.test(e.key)) {
      if (e.key == "Backspace")
        document.getElementById("in").value = document
          .getElementById("in")
          .value.slice(0, -1);
      
      onChange(document.getElementById("in").value);
      return;
    }
    if (document.getElementById("in").value.length >= 22) return;
    if (!checkIfValid(e.key)) return;
    document.getElementById("in").value += e.key;
    onChange(document.getElementById("in").value);
  };
});
function subscribe() {
  document.getElementById("min-btn").addEventListener("click", () => {
    ipcRenderer.invoke("minimize");
  });
  document.getElementById("close-btn").addEventListener("click", () => {
    ipcRenderer.invoke("close");
  });
  // Gotta change black cross to white cross as it looks bad over red x)
  document.getElementById("close-btn").addEventListener("mouseenter", () => {
    document.getElementById("close-btn-image").src =
      "data:image/jpeg;base64," + wClose;
  });
  // Revert to black when user hovers
  document.getElementById("close-btn").addEventListener("mouseleave", () => {
    document.getElementById("close-btn-image").src =
      "data:image/jpeg;base64," + kClose;
  });
}
window.currentselector = "dec";
function onChange(val) {
  if (!val.trim()) val = 0;
  const boxes = document.getElementsByClassName("block-conversion");
  Array.from(boxes).forEach((x) => {
    const to = x.getAttribute("data-type");
    x.getElementsByClassName("changable-t")[0].textContent = parseInt(
      val,
      getToVal(window.currentselector)
    ).toString(getToVal(to));
  });
}
function getToVal(val) {
  switch (val) {
    case "dec":
      return 10;
    case "hex":
      return 16;
    case "bin":
      return 2;
    case "oct":
      return 8;
  }
}
window.onChange = onChange;
window.checkIfValid = (val) => {
  switch (window.currentselector) {
    case "bin":
      return /^[01]+$/.test(val);
    case "dec":
      return /^[0-9]+$/.test(val);
    case "hex":
      return /^[A-Fa-f0-9]+$/.test(val);
    case "oct":
      return /^[0-7]+$/.test(val);
  }
};
