//this is the extract . extracted from http://www.netlingo.com/acronyms.php
//run this script in chrome devtools after opening the above link
var elem = document.querySelector('#container > div.body > div.list_box3 > ul');
var list = {};
var chs = elem.getElementsByTagName("LI");
for(var i = 0 ;i< chs.length;i++){
    var ch = chs[i];
    var val = ch.childNodes[1].textContent;
    var key = ch.getElementsByTagName('a')[0].innerText;
    list[key] = val;
}