
//use private function
displayTime = () => {
    var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      document.getElementById("time").innerHTML = strTime;
}

let myVar = setInterval(displayTime, 1000);
//Calculator Code
const ButtonContainer= document.getElementById("button-container");
const Result= document.getElementById("contentEditable");
const FullEquation= document.getElementById("fullEquation");
const CurrentOperator= document.getElementById("currentOperator");
let str="", result="0", numValue="0";
ButtonContainer.addEventListener("click", (event)=>{
  let currentPressedButton = event.target.id;
  if(currentPressedButton!="button-container"){
    //build the string
    //if it is a number add it to the num1 string
    FullEquation.classList.remove("error");
    switch(currentPressedButton){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':{
          if(result!=0){
            str=""
            result=0;
            CurrentOperator.innerHTML="";
          }
          if(str=="" && currentPressedButton==0)
            break;
          if(str.endsWith(')')){
            str=str.concat('*')
          }
          str=str.concat(currentPressedButton);
          FullEquation.innerHTML=`${str}`;
          Result.innerHTML= eval(str);
          break;
      }
      case '+':
      case '-':
      case '*':
      case '(':
      case ')':
      case '/':{
        if(result!=0){
          str=result.toString();
          result=0;
        }
        if(str.charAt(str.length-1)=='+' ||
        str.charAt(str.length-1)=='-' ||
        str.charAt(str.length-1)=='*' ||
        str.charAt(str.length-1)=='/'
        ){
          str = str.substring(0, str.length - 1);   
        }
        if(currentPressedButton=="(" && !(str=="" && result==0))
          str=str.concat('*')
        else if(currentPressedButton=="-"&&FullEquation.innerHTML=="0"){
          str=str.concat('-')
          CurrentOperator.innerHTML="-"
          break
        }
        else if(str=="" && result==0 && (currentPressedButton!="(" || currentPressedButton!="."))
          break; //to avoid operator at start

        str=str.concat(currentPressedButton);
        FullEquation.innerHTML=str;
        CurrentOperator.innerHTML=currentPressedButton;
        break;
      }
      case '@':{
        if(str==="" || str.length==1 && result==0){
          str=""
          FullEquation.innerHTML=0;
          Result.innerHTML=0;
          break;
        }
        str = str.substring(0, str.length - 1);
        FullEquation.innerHTML=str;
        try{
          Result.innerHTML= eval(str); 
        }catch(e){
          if (e instanceof SyntaxError || e instanceof EvalError) {
            FullEquation.classList.add("error")
            console.log(e.message)
            break;
          }
        }
        break;
      }
      case '=':{
        try{
          result = eval(str);
        }catch(e){
          if (e instanceof SyntaxError || e instanceof EvalError) {
            FullEquation.classList.add("error")
            console.log(e.message)
            break;
          }
        }
        if(result===undefined || result===NaN)break;
        
        FullEquation.innerHTML=result;
        Result.innerHTML= result;
        CurrentOperator.innerHTML=currentPressedButton;
        break;
      }
      case 'C':{
        str=""
        Result.innerHTML="0"
        FullEquation.innerHTML="0"
        CurrentOperator.innerHTML=""
      }
    }
    console.log(`${str}`);
  }
    // add your name and social handles
    // add history 
    //add some animations
    //custom clour pressed button
    //keyboard input + content editable
    //code optimizations

})