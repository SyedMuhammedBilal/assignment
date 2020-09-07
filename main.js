//let myarray = ['Pakistan','Zindabad','Super']

{/*function matchWord(word, array){
  const parsedArrayString = array.slice(0,array.length - 1).join('').toLowerCase();
  const requiredArrayString = [parsedArrayString, array[array.length - 1]].join('').toLowerCase();
  
  return requiredArrayString.includes(word.toLowerCase());
}

console.log(matchWord("PakistanLahore",myarray));*/}

{/*camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase()
    })
}

console.log(camelize('Aamir Pinger'))*/}

{/*function matchWord(word, array){
    const splittedWordArray = word.split(/(?=[A-Z])/);
    const isWordExist = splittedWordArray.filter((eachWord) => {
        return array.filter((word) => {
            return eachWord === word
        }).length === splittedWordArray.length
    }).length > 0
    
    return isWordExist;
}*/}

var myArray = ["pakistan", "zindabad", "super"];

function matchWord(wordArray, str) {
    var x = str.replace(/([A-Z])/g, ' $1').split(" ");
    return x.every(function (e) { return !e || wordArray.indexOf(e.toLowerCase()) >= 0; });
}

console.log(matchWord(myArray, "PakistanZindabad"));

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

console.log(camelize('Aamir Pinger'))
console.log(camelize('Aamir pinger'))
console.log(camelize('aamir pinger'))