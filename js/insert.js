function insertScripts(){
var jsCode = 'insertScript("#1", insertScript("#2")); function insertScript(src, onLoad){ var sc = document.createElement("script"); sc.src = src; document.body.appendChild(sc); if(typeof onLoad === "function") { sc.onload = onLoad} }';
jsCode = jsCode.split("#1").join(chrome.extension.getURL("js/list.js"));
jsCode = jsCode.split("#2").join(chrome.extension.getURL("js/script.js"));
var script = document.createElement('script');
var code = document.createTextNode(jsCode);
script.appendChild(code);
(document.body || document.head).appendChild(script);
}
window.onload = insertScripts;