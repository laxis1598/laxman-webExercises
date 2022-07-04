//Display numbers function
function displayNumbers() {
    for(let i=1;i<=100;i++)
    {
        console.log(i);
    }
}
displayNumbers();
//End of Display numbers function

//Date display function
function date(dd,mm,yyyy) {
    console.log(`${dd}/${mm}/${yyyy}`);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

date(dd,mm,yyyy);
//End of Date display function

//celsius to Faranheit
function temperature(x) {
     console.log(((x*1.8)+32).toFixed(2));
}

temperature(99);
// end of celsius to Faranheit

//array average
function average(array) {
    let sum=0;
     for(let i=0;i<array.length;i++)
     {
        sum=sum+array[i];
     }
     console.log((sum/array.length));
}

const a=[1,2,3,4,5,6];
average(a);
//end of array average

//string reverse
function reverse(str){
    
    console.log(str.split("").reverse().join(""));
}

reverse("hello");
//end of string reverse