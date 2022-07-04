
 //create object constructor function
function Calculator(num1, num2, op){
    this.num1 = num1;
    this.num2 = num2;
    this.op = op;
    let res;
    switch (this.op) {
        case 'add':
            res = this.num1 + this.num2;
            break;
        case 'sub':
            res = this.num1 - this.num2;
            break;
        case 'mul':
            res = this.num1 * this.num2;
            break;
        case 'div':
            res = this.num1 / this.num2;
            break;
        default:
            res= 'Error! No operation selected.';
            }
    this.res=res;
    } 

let calculator = new Calculator(1, 2, "div");
console.log(calculator.res);
  