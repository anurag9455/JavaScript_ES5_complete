//Module Pattern
// Budget Controller Module
// ********************************************************************************
var budgetController = (function() {
    //IIFE

    // Some Code

    var Expense = function (id , description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
        
    };// Function constructor
    
    var Income = function (id , description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
    
    var allExpenses = [];
    var allIncome = [];
    
    var totalExpense = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0 ,
            inc: 0
        }
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            //ID = last ID + 1

            //Create new ID
           /* if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1 ].id + 1;
            } else {
                ID = 0;
            }*/
            ID = 0;

            

            // Create new item based on 'inc' or 'exp' type

            if (type === 'exp') {
                
                newItem = new Expense(ID, des, val);
                
            } else if (type === 'inc') {

                newItem = new Income(ID, des, val);
                
            } 


            // Push it into our data structure
                
            data.allItems[type].push(newItem);


            // Return the new element
            return newItem;
        
            

        },

        testing: function () 
        {
            console.log(data);
            
        }
    };

}) ();



// UI Module
//********************************************************************************** 
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    // Some code
    return {
        getInput: function () {
        return{

            type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            discription : document.querySelector(DOMstrings.inputDescription).value,
            val : document.querySelector(DOMstrings.inputValue).value
                };
        },
        getDOMstrings: function () {
          return DOMstrings;  // Making DOM Strings public
        }
    };


}) ();


// App Controller Module
//**********************************************************************************
var controller = (function (budgetCtrl, UICtrl ) {
    

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
       //console.log(event);

       if (event.keyCode === 13 || event.which === 13) {
           //console.log("ENTER was pressed.....");
           ctrlAddItem();


           
       }
        
    });
    }

    

    var ctrlAddItem = function () {

        var input, newItem;

        //console.log("Add Button was clicked");
        //console.log("It worked.....");
        
        // 1. Get the filled input data

        var input = UICtrl.getInput();
        //console.log(input);

        // 2. Add the item to the buget controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);


        // 3. Add new item to UI



        // 4. Calc the budget



        // 5. Display the budget.
        
    };
    
    return {
        init: function () {
            console.log('Application has started....');
            setupEventListeners();
            
        }
    };
 
    
})(budgetController, UIController);

controller.init();








