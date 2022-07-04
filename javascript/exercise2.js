const List=["shewag","sachin","yuvaraj","raina","dhoni","kohli","zaheer","bumrah","ashwin","chahal","bhuvaneshwar"];

const List1=[];

List.shift();

console.log(List.length);

List.push("Ganguly");



List.sort();
console.log(List);



for (list of List)
{
    console.log(`${list}-${Math.round((Math.random())*10)}`);
    list=list.toUpperCase();
    List1.push(list);
}

const greet=x=>{
    return `hey ${x}`;
}


console.log(greet("Hagrid"));