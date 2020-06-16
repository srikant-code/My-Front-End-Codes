var Calculations = (function (){
    
    data = {
        a:0,
        b:0,
        result:0,
        expr:[]
    }

    return{
        createExpression: function(){
            return data.a;
        }
    }

})();

var UIController = (function (){

    var DOMstrings = {
        inputBox: 'container'
    };
    
    //set up event listeners
    
    return {
        //sonmething
        displayResult:  function(){
            
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }

})();
 
 
 var calculator = (function (UICtrl, Calc) {
    
    var DOM = UICtrl.getDOMstrings();
    var setupEventListeners = function(){
        var x=document.getElementById("input");
        x.addEventListener('click', displayres);
    }

    var displayres = function(event) {
        console.log("A button was clicked !");
        var item= event.target.tagName;
        console.log();
    }

    return {
        init: function(){
                Calc.createExpression();
                setupEventListeners();
                console.log("Application has started !");
        }
    }
 })(UIController,Calculations);

calculator.init();

/*  Plan
 1. create event handlers
    1. delete from array backspace
    2. add to the array if no. or operator
    3. equal will evaluate the expression
 2. create an expression
 3. evaluate the expr
 4. update the result
 5. clear the input field
 6. use result value for further calculations
 7. init function to clear all the data

*/

