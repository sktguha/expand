	document.body.oninput = function(e){
		e.target = e.target || e.srcElement;
		if(e.target.className === 'uiTextareaAutogrow _552m'){
			var textarea = e.target;
			if(textarea.value){
				textarea.value = textarea.value.split(" ").map(function(word){
					return (list[word] || word) + " ";
				}).join("").trim();
			}
		}
	}