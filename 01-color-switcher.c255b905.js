!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),clearInterval(d)})),e.setAttribute("disabled","disabled")}();
//# sourceMappingURL=01-color-switcher.c255b905.js.map
