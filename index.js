function theBeatlesPlay(musicians, instruments){
  var conCat = [];
  for (var i = 0; i < musicians.length; i++){
    conCat.push(musicians[i]+ " plays" + instruments[i]);
  }
  return conCat;
}
function johnLennonFacts(){
 var facts = ["Fact Number 1", "Fact number 2", "Fact number 3"]
 var conCatFacts = [];
 var i = 0;
 while (i < facts.length) {
   conCatFacts.push(facts[i]+"!!!")
   i++;
 }
  return conCatFacts;
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function iLoveTheBeatles(num){
var arrayNew = []

if(num !== 17){
  do{
      arrayNew.push("I love the Beatles!")
    }
  while (incrementVariable() <= num)
    }
else{
    arrayNew.push("I love the Beatles!")
    }
return arrayNew
}
