JsOsaDAS1.001.00bplist00�Vscript_�// A5SearchEngine | Nathaniel Olson | B719424 | cono | Loughborough University

var caseSensitive = false
var string = "abcdef"
var pattern = "CG"
var contents = [ "Loughborough University offers degree programmes and world class research.", "An alternative University", "Yet another University"]
var pages = [ "|www.lboro.ac.uk|Loughborough University offers degree programmes and world class research." , "!www.xyz.ac.uk!An alternative University" , "%www%Yet another University" ]
var web = [ {url : "www.lboro.ac.uk",  content : "Loughborough University offers degree programmes and world class research." } , {url : "www.xyz.ac.uk",  content : "An alternative University" } , {url : "www",  content : "Yet another University" } ]


function index(string,pattern,caseSensitive){
	if (caseSensitive === true) {
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
  for(var i = 0; i<pattern.length; i++){
    if(pattern.charAt(i)>="a"&&pattern.charAt(i)<="z"){
      found = false
      for(var o = 0; o<(string.length); o++){
        if(string.charAt(o) == pattern.charAt(i)){
          found = true
        }
      }
    }
    if (found === false){
      return false
    } 
  }
  return true
}


//function matchContents not working
function matchContents(contents,pattern){
  //var returnArray[]
  for(i in contents){
   if(match(contents,pattern) === true)
     returnArray[returnArray.length]= i
  }
  return returnArray
}
/*
//function url1 not written
function url1(pages,pattern){
  var endMarker = -1
  var searchMarker = 0
  for(i in pages){
    if(index(pages[i],pattern,false)!= -1){
      while(endMarker = -1){
        searchMarker = searchMarker + 1
        if(pages[i].charAt(searchMarker) = "|"){
         endMarker = searchMarker - 1 
        }
      }
    }
  }
}
*/


alert(matchContents(contents,pattern))

                              �jscr  ��ޭ