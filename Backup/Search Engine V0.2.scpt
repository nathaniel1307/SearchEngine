JsOsaDAS1.001.00bplist00�Vscript_// A5SearchEngine | Nathaniel Olson | B719424 | cono | Loughborough University

var caseSensitive = false
var string = "abAB12"
var pattern = "not"
var contents = ["Loughborough University offers degree programmes and world class research.", "An alternative University", "Yet another University"]


function index(string,pattern,caseSensitive){
	if (caseSensitive == true) {
		return(string.indexOf(pattern))
	} else {
		string = string.toLowerCase()
        pattern = pattern.toLowerCase()
      	return(string.indexOf(pattern))
	} 
}

function idxP1(contents,pattern){
  pattern = pattern.toLowerCase()
  for(i in contents){
    var item = contents[i]
    item = item.toLowerCase()
    if(item.indexOf(pattern)!= -1){
     return i 
    }
  }
  return -1
}

alert(idxP1(contents,pattern))                              ,jscr  ��ޭ