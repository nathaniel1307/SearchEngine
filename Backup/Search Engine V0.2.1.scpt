JsOsaDAS1.001.00bplist00�Vscript_�// A5SearchEngine | Nathaniel Olson | B719424 | cono | Loughborough University

var caseSensitive = false
var string = "abcdef"
var pattern = "CG"
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

function match(string,pattern){
  var found
  pattern = pattern.toLowerCase()
  string = string.toLowerCase()
  for(var i = 0; i>(pattern.length-1); i++){
    if(pattern.charAt(i)>97){
      found = false
      for(var o = 0; o>(string.length-1); o++){
        if(string.charAt(o) = pattern.charAt(i)){
          found = true
        }
      }
    }
    if (found = false){
      return false
    }
    return true
  }
}


alert(match(string,pattern))

                              �jscr  ��ޭ