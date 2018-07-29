// A5SearchEngine | Nathaniel Olson | B719424 | cono | Loughborough University


var caseSensitive = false;
var string = "Coooool!";
var pattern = "o";
var contents = [ "Loughborough University offers degree programmes and world class research.", "An alternative University", "Yet another University"];
var pages = [ "|www.lboro.ac.uk|Loughborough University offers degree programmes and world class research." , "!www.xyz.ac.uk!An alternative University" , "%www%Yet another University" ];
var web = [ {url : "www.lboro.ac.uk",  content : "Loughborough University offers degree programmes and world class research." } , {url : "www.xyz.ac.uk",  content : "An alternative University" } , {url : "www",  content : "Yet another University" } ];


function index(string,pattern,caseSensitive){
    //returns the index where pattern starts in string (or -1 if not found). Case sensitivity depends on caseSensitive
	if (caseSensitive === false) {
	    //makes string all the same case for cas insensitive comparison
		string = string.toLowerCase();
        pattern = pattern.toLowerCase();
	}
    return(string.indexOf(pattern))
}

function idxP1(contents,pattern){
    //returns the index of the first page in contents that matches pattern (case insensitive) else -1
  pattern = pattern.toLowerCase();
  for(i in contents){
      //searches through the contents array
    var item = contents[i];
    item = item.toLowerCase();
    if(item.indexOf(pattern)!== -1){
     return i 
    }
  }
  return -1
}

function match(string,pattern){
    //returns true if all the individual LETTERS of pattern appear in string (regardless of order) (case insensitive)
    pattern = pattern.toLowerCase();
    string = string.toLowerCase();
    var found;
    for(var i = 0; i<pattern.length; i++){
        if(pattern.charAt(i)>="a"&&pattern.charAt(i)<="z"){
            //checks that the current character in pattern is a letter rather than a number or special character
            found = false;
            for(var o = 0; o<(string.length); o++){
                if(string.charAt(o) === pattern.charAt(i)){
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

function matchContents(contents,pattern){
    //returns an array of indexes of each page in contents that match pattern (match in the style of function 3)
  var returnArray=[];
  for(i in contents){
      //searches through contents array
   if(match(contents[i],pattern) === true)
     returnArray[(returnArray.length)]= i
  }
  return returnArray
}

function url1(pages,pattern){
    //returns the url part of the first page in pages for which the content part matches pattern (in the style of function 1, case insensitive)
    //returns an empty string if no page is found
    var endValue = -1;
  for(i in pages) {
      //searches through pages array
      var item = pages[i].substring(1);
      for (var o = 0; o <= item.length; o++) {
          if (((item.charAt(o) < "a" || item.charAt(o) > "z") && item.charAt(o) !== "." )&& item.charAt(o)!== " ") {
              endValue = o;
              if (index((item.substring(endValue+1)), pattern, false) !== -1) {
                  return (item.substring(0, endValue))
              }
          }
      }
  }
  return("")
}

function urls(pages,pattern) {
    //returns an array of urls from pages for which the corresponding content matches pattern (in the style of function 3)
    var returnArray = [];
    var endValue = -1;
    for (i in pages) {
        //searches through pages array
        var item = pages[i].substring(1);
        for (var o = 0; o <= item.length; o++) {
            if (((item.charAt(o) < "a" || item.charAt(o) > "z") && item.charAt(o) !== "." ) && item.charAt(o) !== " ") {
                break
            }
            {
                endValue = o;
            }
        }
        if (index((item.substring(endValue + 1)), pattern, false) !== -1) {
            returnArray[returnArray.length] = i
        }
    }
    return (returnArray);
}

function score(string,pattern){
    //returns the number of times that pattern occurs in string (overlapping matches count) (case insensitive)
    var count = 0;
    string = string.toLowerCase();
    pattern = pattern.toLowerCase();
    for(var i = 0;i<string.length;i++){
        //checks if the pattern occurs
        if((string.substr(i,pattern.length)) === pattern){
            count = count + 1
        }
    }
    return(count)
}

function scores(web,pattern){
    //returns an array of scores (each score is the number of times that pattern occurs in a content part in the array web) (in the style of function 7)
    var returnArray = [];
    for(i in web) {
        //searches through web array
        returnArray[i] = score(web[i].content, pattern);
    }
    return(returnArray)
}

function urlScores(web,pattern){
    //returns an array of records of the form {url: ... , score: ... } derived from web. Each record contains a url and the pattern score of its corresponding content.
    //Records with a score of zero are omitted.
    var returnArray = [];
    var item = 0;
    for(i in web){
        //searches through web array
        if(score(web[i].content,pattern)!== 0){
            returnArray[item] = {url: web[i].url, score: score(web[i].content,pattern)};
            item = item +1
        }
    }
return(returnArray)
}

function rankedScores(web,pattern){
    //returns an array of records in the style of qu 9 sorted into descending order of scores
    //Records with a score of zero are omitted.
    var scoreArray = urlScores(web,pattern);
    var tempUrl;
    var tempScore;
    var complete;
    do{
        complete = true;
        for(i in scoreArray){
            var index = i++;
            if(scoreArray[i].score<scoreArray[index].score){
                complete = false;
                tempUrl = scoreArray[i].url;
                tempScore = scoreArray[i].score;
                scoreArray[i].url = scoreArray[i+1].url;
                scoreArray[i].score = scoreArray[i+1].score;
                scoreArray[i+1].url = tempUrl;
                scoreArray[i+1].score = tempScore;
            }
        }

    }while(complete = false);
return scoreArray
}


alert(rankedScores(web,pattern));

