const shapes=document.querySelector(".shapes");
const nextButton=document.querySelector("#next-button");
const chooseContainer=document.querySelector(".choose-container");
const calculateContainer=document.querySelector(".calculate-container");
const resultContainer=document.querySelector(".result-container");
const square=document.querySelector(".square");
const circle=document.querySelector(".circle");
const triangle=document.querySelector(".triangle");
const resultSquare=document.querySelector("#square");
const resultCircle=document.querySelector("#circle");
const resultTriangle=document.querySelector("#triangle");
const calculateButton=document.querySelector("#calculate-button");
const parameter=document.querySelector(".parameter");
const shapeType=document.querySelector(".type");
const startButton=document.querySelector("#start-again");
const shapeParameter=document.querySelector("#parameter");
const areaFormula=document.querySelector("#area-formula");
const areaValue=document.querySelector("#area-value");
const perimeterFormula=document.querySelector("#perimeter-formula");
const perimeterValue=document.querySelector("#perimeter-value");
const tickSquare=document.querySelector(".tick-square");
const tickCircle=document.querySelector(".tick-circle");
const tickTriangle=document.querySelector(".tick-triangle");
const input=document.querySelector("#input");
const parameterUnit=document.querySelector("#parameterunit")
const inputValue=document.querySelector("#inputvalue");

//Initial Declarations
let shape="";
let parameterRequired="";
let value=0;
let isSquare=false;
let isCircle=false;
let isTriangle=false;
//end of Initial Declarations


//function handlers

//square click function handler
const squareClickHandler=()=> {
    parameterRequired="Side";
    shape="Square"; 
    isSquare=true;
    isCircle=false;
    isTriangle=false;
    tickSquare.classList.add("tick-mark"); 
    tickCircle.classList.remove("tick-mark");
    tickTriangle.classList.remove("tick-mark");
}

//circle click function handler
const circleClickHandler=()=> {
    parameterRequired="Radius";
    shape="Circle";
    isSquare=false;
    isCircle=true;
    isTriangle=false;
    tickSquare.classList.remove("tick-mark"); 
    tickCircle.classList.add("tick-mark");
    tickTriangle.classList.remove("tick-mark");
}

//triangle click function handler
const triangleClickHandler=()=> {
    parameterRequired="Side (Base & Height)";
    shape="Triangle";
    isSquare=false;
    isCircle=false;
    isTriangle=true;
    tickSquare.classList.remove("tick-mark"); 
    tickCircle.classList.remove("tick-mark");
    tickTriangle.classList.add("tick-mark");
}

//next button display function handler
const nextButtonDisplayHandler=()=> {
    nextButton.classList.remove("display");
    nextButton.classList.add("button");
}

//next button click function handler
const nextButtonHandler=()=> {
    chooseContainer.classList.add("display");
    calculateContainer.classList.remove("display");
    parameter.textContent=parameterRequired; 
}

//calculate button click function handler
const calculateButtonHandler=()=> {
    calculateContainer.classList.add("display");
    resultContainer.classList.remove("display");
    value=input.value;
    shapeType.textContent=shape;
    shapeParameter.textContent=parameterRequired.toUpperCase();
    isSquare && (resultSquare.classList.remove("display"));
    isCircle && (resultCircle.classList.remove("display"));
    isTriangle && (resultTriangle.classList.remove("display"));
    isTriangle && (shapeParameter.textContent="SIDE");
    
    const shapeDetails={
        Square:{
            parameterUnit:"s",
            inputValue:value+" cm",
            areaFormula:"s * s",
            areaValue:`${input.value}`*`${input.value}` +" sq cm",
            perimeterFormula:"4 * s",
            perimeterValue:(value*4+" cm"),
        },
        Circle:{
            parameterUnit:"r",
            inputValue:value+" cm",
            areaFormula:"πr²",
            areaValue:3.14*`${input.value}`*`${input.value}`+" sq cm",
            perimeterFormula:"2πr",
            perimeterValue:2*3.14*`${input.value}`+" cm",
        },
        Triangle:{
            parameterUnit:"s",
            inputValue:value+" cm",
            areaFormula:"0.433 * s * s",
            areaValue:0.433*`${input.value}`*`${input.value}`+" sq cm",
            perimeterFormula:"3 * s",
            perimeterValue:3*`${input.value}`+" cm",
        }
    };  

    parameterUnit.textContent=shapeDetails[shape].parameterUnit;
    inputValue.textContent=shapeDetails[shape].inputValue;
    areaFormula.textContent=shapeDetails[shape].areaFormula;
    areaValue.textContent=shapeDetails[shape].areaValue;
    perimeterFormula.textContent=shapeDetails[shape].perimeterFormula;
    perimeterValue.textContent=shapeDetails[shape].perimeterValue;
}

//start again button click function handler
const startAgainButtonHandler=()=> {
    chooseContainer.classList.remove("display");
    calculateContainer.classList.add("display");
    resultContainer.classList.add("display");
    nextButton.classList.add("display");
    resultTriangle.classList.add("display");
    resultSquare.classList.add("display");
    resultCircle.classList.add("display");
    tickSquare.classList.remove("tick-mark"); 
    tickCircle.classList.remove("tick-mark");
    tickTriangle.classList.remove("tick-mark");
    shape="";
    parameterRequired="";
    isSquare=false;
    isCircle=false;
    isTriangle=false;
}
//end of function handlers

//event listeners

//event listeners for square,circle & triangle click
square.addEventListener("click",squareClickHandler);
circle.addEventListener("click",circleClickHandler);
triangle.addEventListener("click",triangleClickHandler);

//event listener to display next button
shapes.addEventListener("click",nextButtonDisplayHandler);

//event listener for next button
nextButton.addEventListener("click",nextButtonHandler);

//event listener for calculate button
calculateButton.addEventListener("click",calculateButtonHandler);

//event listener for start again button
startButton.addEventListener("click",startAgainButtonHandler);

//end of event listeners


