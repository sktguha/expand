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
					if(list[word]){
						newStr += list[word];
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
			if(list[word]){
				newStr += list[word];
				word = "";
			} else if(word){
				newStr += word;
				word = "";
			}
			textarea.value = newStr;
		}
	}