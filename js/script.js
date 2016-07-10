var reg = /message_batch\[(\d*)\]\[body\]=(.*)/

registerHook();
//need to verify if using chrome.tabs.onUpdate.addListener approach is better than this
function intercept(body){
    if(reg.test(body)){
		body = body.split("&").map(function(str){
            if(reg.test(str)){
                var arr = reg.exec(str)
				return 'message_batch['+arr[1]+'][body]='+transformMessage(arr[2]);
			}
            return str;
        }).join("&");
    }
    return body;
}
function registerHook(){
(function(send) {
    XMLHttpRequest.prototype.send = function() {
        arguments[0] = intercept(arguments[0]);        
		send.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.send);
}

function getFullForm(word){

    if(word.toUpperCase() === word){
		// need to use hasOwnProperty otherwise it will match also for valueOf, constructor etc
        var exp = "";
		if(list.hasOwnProperty(word)){
			exp = list[word];
		} 
		if(list.hasOwnProperty(word.toLowerCase())){
			exp = list[word.toLowerCase()];
		}
        //such filters could be enabled/disabled later on. options menu can be added
        if(exp && exp.toLowerCase().indexOf('sex') === -1){
            return exp;
        }
       }
    return word;
}

function transformMessage(str){
	var word = "", newStr = "", minTokenLength = 3, str = decodeURIComponent(str);
	for(var i = 0;i <= str.length;i++){
		var ch = str.charAt(i);
		if(i<str.length){
			word += ch;
		}
		if([' ','\n','\t'].indexOf(ch) !== -1 || i === str.length){
			//flush buffer on whitespace character
			var replacement = getFullForm(word.trim());
			if(word.trim().length >= minTokenLength && replacement){
				newStr += replacement+ch;
			} else if(word){
				newStr += word;
			}
			//reset word
			word = "";
		} 
	}
	return encodeURIComponent(newStr);
}
	
