function pressBind(num) {
    if (checkMaxCap(document.getElementById("in").value)) return;
    if (!checkIfValid(num)) return;
    document.getElementById("in").value += num.toString();
    onChange(document.getElementById("in").value);
  }
  function clearInput(stater) {
    document.getElementById("in").value = "";
  
    const boxes = document.getElementsByClassName("block-conversion");
    Array.from(boxes).forEach((x) => {
      x.getElementsByClassName("changable-t")[0].textContent = "0";
    });
  }
  function backSpaceBind() {
    document.getElementById("in").value = document
      .getElementById("in")
      .value.slice(0, -1);
    onChange(document.getElementById("in").value);
  }
  function pressBindOfHex(charv) {
    if (checkMaxCap(document.getElementById("in").value)) return;
    if (!checkIfValid(charv)) return;
    if (
      document
        .getElementsByClassName("calc-aux-buttons")[0]
        .getAttribute("data-disabled") == "true"
    )
      return;
    else {
      document.getElementById("in").value += charv.toString().toLowerCase();
      onChange(document.getElementById("in").value);
    }
  }
  function handleConversionChange($this) {
    switch ($this.getAttribute("data-type")) {
      case "oct":
        if (checkIfAlreadySame($this.getAttribute("data-type"))) return;
        else {
          $this.style.borderLeft = "4px solid #08f";
          document.querySelector(
            `[data-type="${window.currentselector}"]`
          ).style.borderLeft = "none";
          Array.from(
            document.getElementsByClassName("calc-aux-buttons")[0].children
          )
            .filter((x) => !x.classList.contains("disabled"))
            .forEach((x) => {
              x.classList.add("disabled");
            });
          Array.from(document.getElementsByClassName("calc-button"))
            .filter(
              (x) =>
                x.getAttribute("data-num") &&
                !["0", "1", "2", "3", "4", "5", "6", "7"].includes(
                  x.getAttribute("data-num")
                ) &&
                !x.classList.contains("disabled")
            )
            .forEach((x) => x.classList.add("disabled"));
            Array.from(document.getElementsByClassName("calc-button"))
            .filter(
              (x) =>
                x.getAttribute("data-num") &&
                ["0", "1", "2", "3", "4", "5", "6", "7"].includes(
                  x.getAttribute("data-num")
                ) &&
                x.classList.contains("disabled")
            )
            .forEach((x) => x.classList.remove("disabled"));
          document
            .getElementsByClassName("calc-aux-buttons")[0]
            .setAttribute("data-disabled", true);
          window.currentselector = $this.getAttribute("data-type");
          clearInput(true);
        }
      case "dec":
        if (checkIfAlreadySame($this.getAttribute("data-type"))) return;
        else {
          $this.style.borderLeft = "4px solid #08f";
          document.querySelector(
            `[data-type="${window.currentselector}"]`
          ).style.borderLeft = "none";
          Array.from(
            document.getElementsByClassName("calc-aux-buttons")[0].children
          )
            .filter((x) => !x.classList.contains("disabled"))
            .forEach((x) => {
              x.classList.add("disabled");
            });
          Array.from(document.getElementsByClassName("calc-button"))
            .filter(
              (x) =>
                x.getAttribute("data-num") && x.classList.contains("disabled")
            )
            .forEach((x) => x.classList.remove("disabled"));
          document
            .getElementsByClassName("calc-aux-buttons")[0]
            .setAttribute("data-disabled", true);
          window.currentselector = $this.getAttribute("data-type");
          clearInput(true);
        }
      case "hex":
        if (checkIfAlreadySame($this.getAttribute("data-type"))) return;
        else {
          $this.style.borderLeft = "4px solid #08f";
          document.querySelector(
            `[data-type="${window.currentselector}"]`
          ).style.borderLeft = "none";
          document
            .getElementsByClassName("calc-aux-buttons")[0]
            .setAttribute("data-disabled", false);
          Array.from(
            document.getElementsByClassName("calc-aux-buttons")[0].children
          ).forEach((x) => {
            x.classList.remove("disabled");
          });
          Array.from(document.getElementsByClassName("calc-button"))
            .filter(
              (x) =>
                x.getAttribute("data-num") && x.classList.contains("disabled")
            )
            .forEach((x) => x.classList.remove("disabled"));
          window.currentselector = $this.getAttribute("data-type");
          clearInput(true);
        }
  
      case "bin":
        if (checkIfAlreadySame($this.getAttribute("data-type"))) return;
        else {
          $this.style.borderLeft = "4px solid #08f";
          document.querySelector(
            `[data-type="${window.currentselector}"]`
          ).style.borderLeft = "none";
          Array.from(
            document.getElementsByClassName("calc-aux-buttons")[0].children
          )
            .filter((x) => !x.classList.contains("disabled"))
            .forEach((x) => {
              x.classList.add("disabled");
            });
          Array.from(document.getElementsByClassName("calc-button"))
            .filter(
              (x) =>
                x.getAttribute("data-num") &&
                !["0", "1"].includes(x.getAttribute("data-num")) &&
                !x.classList.contains("disabled")
            )
            .forEach((x) => x.classList.add("disabled"));
          document
            .getElementsByClassName("calc-aux-buttons")[0]
            .setAttribute("data-disabled", true);
          window.currentselector = $this.getAttribute("data-type");
          clearInput(true);
        }
    }
    function checkIfAlreadySame(param) {
      return window.currentselector == param;
    }
  }
  
  function checkMaxCap(val) {
    if (val.length >= 22) return true;
    else return false;
  }
  