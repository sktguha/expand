function getFullForm(word){
       if(word.toUpperCase() === word){
           return list[word] || list[word.toLowerCase()];
       }
    return null;
}
var minTokenLengh = 3;
document.body.oninput = function(e){
		e.target = e.target || e.srcElement;
		if(e.target.className === 'uiTextareaAutogrow _552m'){
			var textarea = e.target;
			var str = textarea.value;
			var newStr = "";
			var word = "";
			for(var i = 0;i< str.length;i++){
				var ch = str[i];
				if([' ','\n','\t'].indexOf(ch) !== -1){
					//flush buffer
                    var rep = getFullForm(word);
					if(word.length >= minTokenLengh && rep){
						newStr += rep;
						word = "";
					} else if(word){
						newStr += word;
						word = "";
					}
					newStr += ch;
				} else {
					word += ch;
				}
			}
			//flush buffer
            var rep = getFullForm(word);
			if(word.length >=  minTokenLengh && rep){
				newStr += rep;
				word = "";
			} else if(word){
				newStr += word;
				word = "";
			}
			textarea.value = newStr;
		}
	};
