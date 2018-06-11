/*Program Variables ====================
=====================================*/

//Variables that Hold DOM ELEMENTS
const terminal = document.getElementById('terminal');
const buttonsContainer = document.querySelector('.buttons-container');
const numberButtons = document.querySelectorAll('.number');

//Variables the 3 elemenst to build an expression with the calculator
let firstOperand = '';
let secondOperand = '';
let operator = '';

/* Start of Program =============================
=============================================== */

// Event Handler delegated to the parent div.buttons-container = buttonsContainer
buttonsContainer.addEventListener('click', (e) =>{

    
    if(e.target.className == 'number'){                 //if the button holds just a number
        terminal.textContent += e.target.textContent;   //add the text of that button to the terminal
        firstOperand += e.target.textContent;           // add the text of that button to the firstOperand
    }

    if(e.target.className == 'operator'){               //if the button holds an operator
        terminal.textContent += e.target.textContent;   // add the text of that button to the terminal
        operator  = e.target.textContent;               //set the operator equals to the text of the button
        numberButtons.forEach(function(item){           // change class attribute of every number button to .number-two
            item.className = 'number-two';
        })
    }

    if(e.target.className == 'number-two'){             //if the button has class number-two
        terminal.textContent += e.target.textContent;   //add the text of that button to the terminal
        secondOperand += e.target.textContent;          //add the text of that button to the secondOperator
    }

    if(e.target.id == 'equal'){                                                 
        let result = '';
        //When you press the equals button, if opeartor is +, return the sum of the first and second operands
        if(operator == '+'){                                                    
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
        }
        //When you press the equals button, if opeartor is - , return the subtraction of the first operands minus the second operand
        if(operator == '-'){
           result = parseFloat(firstOperand) - parseFloat(secondOperand);
        }
        //When you press the equals button, if opeartor is * , return the moltiplication of the first operands by the second operand
        if(operator == 'x'){
           result = parseFloat(firstOperand) * parseFloat(secondOperand);
        }
        //When you press the equals button, if opeartor is / , return the division of the first operands by the second operand
        if(operator == '/'){
           result = parseFloat(firstOperand) / parseFloat(secondOperand);
        }
        //Display the result on the terminal
        terminal.textContent = result;
    }

    //if you press the clear button
    if(e.target.id == 'clear'){
        //reset text content of terminal,  
        terminal.textContent = '';
        // reset firstOperand,
        firstOperand = '';
        // reset secondoperand
        secondOperand = '';
        // reset operator
        operator = '';
        // reset the class of each number button to 'number';
        numberButtons.forEach(function(item){            
            item.className = 'number';
        })
    }    
});