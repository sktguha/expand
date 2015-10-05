function getFullForm(word){

    if(word.toUpperCase() === word){
        var exp = list[word] || list[word.toLowerCase()];
        //such filters can be disabled later on. options menu can be added
        if(exp && exp.toLowerCase().indexOf('sex') === -1){
            return exp;
        }
       }
    return null;
}
var minTokenLengh = 3;
//need to use mutation observer here as currently the code is too inefficient.
//https://github.com/uzairfarooq/arrive/ seems to be good
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
